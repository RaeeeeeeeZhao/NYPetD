const searchIn   = document.getElementById('searchIn');
const placesList = document.getElementById('placesList');
const pillsBar   = document.getElementById('pillsBar');
const resCount   = document.getElementById('resCount');
const sortSel    = document.getElementById('sortSel');
const btnList    = document.getElementById('btnList');
const btnMap     = document.getElementById('btnMap');
const listArea   = document.getElementById('listArea');
const mapArea    = document.getElementById('mapArea');

let map = null, markers = [], allPlaces = [], debounce = null;

// ── URL params ──────────────────────────────────────────────────
function applyURL() {
  const p = new URLSearchParams(location.search);
  if (p.get('search'))   searchIn.value = p.get('search');
  if (p.get('category')) {
    const cb = document.querySelector(`input[name="cat"][value="${p.get('category')}"]`);
    if (cb) cb.checked = true;
  }
  // Restore map view if user came back from detail page
  if (p.get('view') === 'map') {
    setTimeout(() => {
      btnMap.click();
      // Restore saved map position
      const pos = sessionStorage.getItem('mapPos');
      if (pos && map) {
        const { lat, lng, zoom } = JSON.parse(pos);
        map.setView([lat, lng], zoom);
      }
    }, 400);
  }
}

// ── Load boroughs ────────────────────────────────────────────────
async function loadBoroughs() {
  const wrap = document.getElementById('boroughList');
  const list = ['Brooklyn','Downtown','Midtown','Queens','Upper East','Upper West','Central Park'];
  try {
    const d = await api('/places/boroughs');
    (d.data || d).forEach(addBorough);
  } catch {
    list.forEach(addBorough);
  }
  function addBorough(b) {
    const id  = 'bor_' + b.replace(/\s+/g,'_');
    const row = document.createElement('label');
    row.className = 'check-row';
    row.innerHTML = `<input type="checkbox" name="borough" value="${b}" id="${id}"/><label for="${id}">${b}</label>`;
    row.querySelector('input').addEventListener('change', onChange);
    wrap.appendChild(row);
  }
}

// ── Filters ──────────────────────────────────────────────────────
function getF() {
  return {
    cats:    [...document.querySelectorAll('input[name="cat"]:checked')].map(c=>c.value),
    bors:    [...document.querySelectorAll('input[name="borough"]:checked')].map(c=>c.value),
    wifi:    document.getElementById('fWifi').checked,
    outdoor: document.getElementById('fOutdoor').checked,
    h24:     document.getElementById('f24h').checked,
    search:  searchIn.value.trim(),
    sort:    sortSel.value,
  };
}

function renderPills(f) {
  pillsBar.innerHTML = '';
  f.cats.forEach(c => pill(c, ()=>{ document.querySelector(`input[name="cat"][value="${c}"]`).checked=false; onChange(); }));
  f.bors.forEach(b => pill(b, ()=>{ document.querySelector(`input[name="borough"][value="${b}"]`).checked=false; onChange(); }));
  if (f.wifi)    pill('Free Wifi',       ()=>{ document.getElementById('fWifi').checked=false;    onChange(); });
  if (f.outdoor) pill('Outdoor Seating', ()=>{ document.getElementById('fOutdoor').checked=false; onChange(); });
  if (f.h24)     pill('Open 24h',        ()=>{ document.getElementById('f24h').checked=false;     onChange(); });
}

function pill(label, fn) {
  const el = document.createElement('span');
  el.className = 'f-pill';
  el.innerHTML = `${label} <span class="f-pill-x">×</span>`;
  el.querySelector('.f-pill-x').addEventListener('click', fn);
  pillsBar.appendChild(el);
}

// ── Fetch ─────────────────────────────────────────────────────────
async function fetchPlaces() {
  placesList.innerHTML = `<div class="state-box"><div class="spin-wrap"><div class="spin"></div></div><p>Finding places…</p></div>`;
  resCount.textContent = '';
  const f = getF();
  renderPills(f);
  saveState(f);

  try {
    const qs = new URLSearchParams();
    if (f.search) qs.set('search', f.search);
    if (f.cats.length === 1) qs.set('category', f.cats[0]);
    if (f.bors.length === 1) qs.set('borough',  f.bors[0]);
    if (f.sort === 'nearest') {
      if (userLatLng) {
        qs.set('lat', userLatLng.lat);
        qs.set('lng', userLatLng.lng);
        qs.set('sort', 'nearest');
      }
    } else if (f.sort !== 'default') {
      qs.set('sort', f.sort);
    }
    if (f.wifi)    qs.set('wifi',    'true');
    if (f.outdoor) qs.set('outdoor', 'true');
    if (f.h24)     qs.set('open24h', 'true');

    const d = await api('/places' + (qs.toString() ? '?'+qs : ''));
    let places = d.data || [];
    console.log('first place imageURL:', places[0]?.imageURL);

    // Client-side multi-filter (multiple cats or boroughs selected)
    if (f.cats.length > 1) places = places.filter(p => f.cats.includes(p.category));
    if (f.bors.length > 1) places = places.filter(p => f.bors.includes(p.borough));

    allPlaces = places;
    resCount.textContent = `Showing ${places.length} place${places.length!==1?'s':''}`;
    renderList(places);
    if (mapArea.classList.contains('active')) renderMap(places);
  } catch(e) {
    placesList.innerHTML = `<div class="state-box"><div class="state-icon">😿</div><h3>Something went wrong</h3><p>${e.message||'Could not load places.'}</p></div>`;
  }
}

function renderList(places) {
  placesList.innerHTML = '';
  if (!places.length) {
    placesList.innerHTML = `<div class="state-box"><div class="state-icon">🐾</div><h3>No places found</h3><p>Try loosening your filters.</p></div>`;
    return;
  }
  places.forEach(p => placesList.appendChild(buildRow(p)));
}

// ── Map ───────────────────────────────────────────────────────────
const MARKER_COLORS = { Cafe:'#d4922a', Park:'#6b8f5e', Vet:'#4a7a9b', Groomer:'#c9664a' };

// Map sidebar panel
function createSidebar() {
  if (document.getElementById('mapSidebar')) return;
  const sb = document.createElement('div');
  sb.id = 'mapSidebar';
  sb.className = 'map-sidebar';
  sb.innerHTML = `<button class="map-sidebar-close" id="sidebarClose">×</button><div id="sidebarContent"></div>`;
  document.getElementById('mapArea').appendChild(sb);
  document.getElementById('sidebarClose').addEventListener('click', closeSidebar);
}

function openSidebar(place) {
  createSidebar();
  const c = cfg(place.category);
  const yn = v => v===true ? '✅ Yes' : v===false ? '❌ No' : 'N/A';

  let tiles = '';
  if (place.rating)   tiles += `<div class="sb-tile"><span>⭐ Rating</span><strong>${place.rating}/5</strong></div>`;
  if (place.phone)    tiles += `<div class="sb-tile"><span>📞 Phone</span><strong><a href="tel:${place.phone}">${place.phone}</a></strong></div>`;
  if (place.category === 'Cafe') {
    if (place.price)        tiles += `<div class="sb-tile"><span>💰 Price</span><strong>$${place.price}</strong></div>`;
    if (place.petPolicy)    tiles += `<div class="sb-tile"><span>🐾 Pets</span><strong>${place.petPolicy}</strong></div>`;
    tiles += `<div class="sb-tile"><span>📶 Wifi</span><strong>${yn(place.freeWifi)}</strong></div>`;
    tiles += `<div class="sb-tile"><span>☀️ Outdoor</span><strong>${yn(place.outdoorSeating)}</strong></div>`;
  }
  if (place.category === 'Vet')  tiles += `<div class="sb-tile"><span>🕐 24h</span><strong>${yn(place.open24h)}</strong></div>`;
  if (place.category === 'Park') tiles += `<div class="sb-tile"><span>🏃 Type</span><strong>${place.type||'N/A'}</strong></div>`;
  if (place.specialFeatures)     tiles += `<div class="sb-tile sb-tile-full"><span>✨ Features</span><strong>${place.specialFeatures}</strong></div>`;

  // Save map position before navigating to detail
  const detailHref = `detail.html?id=${place._id}&category=${place.category}&back=map`;

  document.getElementById('sidebarContent').innerHTML = `
    <div class="sb-thumb">
      ${place.imageURL
      ? `<img src="${place.imageURL}" alt="${place.name}" style="width:100%;height:100px;object-fit:cover;border-radius:12px;">`
      : `<div style="background:${c.thumbBg};width:100%;height:100px;display:flex;align-items:center;justify-content:center;font-size:36px;border-radius:12px;">${c.emoji}</div>`
      }
    </div>
    <span class="sb-cat-tag ${c.tag}">${c.emoji} ${place.category}</span>
    <h2 class="sb-name">${place.name}</h2>
    <p class="sb-addr">📍 ${place.address}</p>
    <div class="sb-tiles">${tiles}</div>
    <div class="sb-btns">
      <a class="sb-btn-detail" href="${detailHref}" onclick="saveMapPos()">View Full Details →</a>
      <button class="sb-btn-save ${savedSet.has(`${place.category}::${place._id}`) ? 'saved' : ''}"
        data-id="${place._id}" data-cat="${place.category}">
        ${savedSet.has(`${place.category}::${place._id}`) ? '❤️ Saved' : '🤍 Save'}
      </button>
    </div>
  `;

  document.querySelector('.sb-btn-save').addEventListener('click', async e => {
    await handleSave(place, e.currentTarget);
  });

  document.getElementById('mapSidebar').classList.add('open');
}

function closeSidebar() {
  document.getElementById('mapSidebar')?.classList.remove('open');
}

// Save current map center+zoom to sessionStorage before leaving
function saveMapPos() {
  if (!map) return;
  const c = map.getCenter();
  sessionStorage.setItem('mapPos', JSON.stringify({ lat: c.lat, lng: c.lng, zoom: map.getZoom() }));
}

let userMarker = null;
let userLatLng = null;
function initMap() {
  if (map) return;
  map = L.map('mapView').setView([40.73, -73.95], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap',
    maxZoom: 19,
  }).addTo(map);
  // Close sidebar when clicking empty map area
  map.on('click', closeSidebar);

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude: lat, longitude: lng } = pos.coords;
        userLatLng = { lat, lng }

        const userIcon = L.divIcon({
          className: '',
          html: `<div style="width:16px;height:16px;border-radius:50%;
            background:#4285f4;border:3px solid #fff;
            box-shadow:0 0 0 3px rgba(66,133,244,0.35);">
          </div>`,
          iconSize: [16, 16],
          iconAnchor: [8, 8],
        });

        if (userMarker) {
          userMarker.setLatLng([lat, lng]);
        } else {
          userMarker = L.marker([lat, lng], { icon: userIcon, zIndexOffset: 1000 }).addTo(map);
          userMarker.bindPopup('📍 You are here');
          map.setView([lat, lng], 14);
        }
      },
      (err) => {
        console.warn('Geolocation error:', err.message);
      },
      { enableHighAccuracy: true, maximumAge: 5000 }
    );
  }
}

function renderMap(places) {
  if (!map) initMap();
  markers.forEach(m => m.remove()); markers = [];
  const bounds = [];

  places.forEach(p => {
    if (!p.location?.coordinates) return;
    const [lng, lat] = p.location.coordinates;
    const col = MARKER_COLORS[p.category] || '#888';
    const c   = cfg(p.category);

    const icon = L.divIcon({
      className: '',
      html: `<div style="width:36px;height:36px;border-radius:50% 50% 50% 0;background:${col};
        border:2.5px solid #fff;box-shadow:0 3px 10px rgba(0,0,0,0.22);
        display:flex;align-items:center;justify-content:center;
        font-size:15px;transform:rotate(-45deg)">
        <span style="transform:rotate(45deg)">${c.emoji}</span>
      </div>`,
      iconSize: [36,36], iconAnchor: [18,36],
    });

    const mk = L.marker([lat, lng], { icon }).addTo(map);
    // Click marker → open sidebar instead of popup
    mk.on('click', e => {
      L.DomEvent.stopPropagation(e);
      openSidebar(p);
    });
    markers.push(mk);
    bounds.push([lat, lng]);
  });

  if (bounds.length) map.fitBounds(bounds, { padding:[50,50] });
}

// ── View toggle ──────────────────────────────────────────────────
btnList.addEventListener('click', () => {
  btnList.classList.add('active'); btnMap.classList.remove('active');
  listArea.classList.remove('hidden'); mapArea.classList.remove('active');
  closeSidebar();
});
btnMap.addEventListener('click', () => {
  btnMap.classList.add('active'); btnList.classList.remove('active');
  listArea.classList.add('hidden'); mapArea.classList.add('active');
  initMap(); renderMap(allPlaces);
  setTimeout(() => map?.invalidateSize(), 200);
});

// ── State ─────────────────────────────────────────────────────────
function saveState(f) { sessionStorage.setItem('bfState', JSON.stringify(f)); }
function loadState() {
  const s = JSON.parse(sessionStorage.getItem('bfState') || 'null');
  if (!s) return;
  document.querySelectorAll('input[name="cat"]').forEach(cb => cb.checked = s.cats?.includes(cb.value));
  window._pendingBors = s.bors || [];
  document.getElementById('fWifi').checked    = s.wifi    || false;
  document.getElementById('fOutdoor').checked = s.outdoor || false;
  document.getElementById('f24h').checked     = s.h24     || false;
  sortSel.value = s.sort || 'default';
}

// ── Listeners ────────────────────────────────────────────────────
function onChange() { clearTimeout(debounce); debounce = setTimeout(fetchPlaces, 280); }

searchIn.addEventListener('input', onChange);
sortSel.addEventListener('change', onChange);
document.querySelectorAll('input[name="cat"]').forEach(cb => cb.addEventListener('change', onChange));
['fWifi','fOutdoor','f24h'].forEach(id => document.getElementById(id).addEventListener('change', onChange));

function onLoginSuccess() { refreshSaved().then(fetchPlaces); }

// ── Init ──────────────────────────────────────────────────────────
(async () => {
  applyURL();
  loadState();
  await loadBoroughs();

  (window._pendingBors || []).forEach(b => {
    const cb = document.querySelector(`input[name="borough"][value="${b}"]`);
    if (cb) cb.checked = true;
  });

  await refreshSaved();
  await fetchPlaces();
})();
