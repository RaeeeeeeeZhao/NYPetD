// ─── Config ─────────────────────────────────────────────────────
const API_BASE = 'http://localhost:3001/api';

// ─── Auth ────────────────────────────────────────────────────────
const auth = {
  token:   () => localStorage.getItem('npd3_token'),
  setTok:  (t) => localStorage.setItem('npd3_token', t),
  rmTok:   () => localStorage.removeItem('npd3_token'),
  user:    () => { try { return JSON.parse(localStorage.getItem('npd3_user')); } catch { return null; } },
  setUser: (u) => localStorage.setItem('npd3_user', JSON.stringify(u)),
  rmUser:  () => localStorage.removeItem('npd3_user'),
  ok:      () => !!localStorage.getItem('npd3_token'),
};

// ─── API wrapper ─────────────────────────────────────────────────
// Static demo build: requests are served by js/demo-api.js instead of
// the Express server, so the site can be hosted on GitHub Pages.
async function api(path, opts = {}) {
  return demoApi(path, opts);
}

// ─── Toast ───────────────────────────────────────────────────────
function toast(msg, type = '') {
  let stack = document.getElementById('toastStack');
  if (!stack) {
    stack = document.createElement('div');
    stack.id = 'toastStack';
    stack.className = 'toast-stack';
    document.body.appendChild(stack);
  }
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  const ico = { ok: '✓', err: '✕', '': '🐾' };
  t.innerHTML = `<span>${ico[type] ?? '🐾'}</span>${msg}`;
  stack.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}

// ─── Category config ─────────────────────────────────────────────
const CAT_CFG = {
  Cafe:    { emoji:'☕', accent:'accent-cafe',    thumbBg:'#f5e6c4', tag:'tag-cafe',    pill:'tag-cafe' },
  Groomer: { emoji:'✂️', accent:'accent-groomer', thumbBg:'#f7e8e2', tag:'tag-groomer', pill:'tag-groomer' },
  Park:    { emoji:'🌳', accent:'accent-park',    thumbBg:'#d8ecd0', tag:'tag-park',    pill:'tag-park' },
  Vet:     { emoji:'🩺', accent:'accent-vet',     thumbBg:'#deedf5', tag:'tag-vet',     pill:'tag-vet' },
};
const cfg = (cat) => CAT_CFG[cat] || { emoji:'📍', accent:'', thumbBg:'#eee', tag:'', pill:'' };

// ─── Saved set ───────────────────────────────────────────────────
let savedSet = new Set();

async function refreshSaved() {
  if (!auth.ok()) { savedSet = new Set(); return; }
  try {
    const d = await api('/saved');
    savedSet = new Set((d.data || []).map(p => `${p.category}::${p._id}`));
  } catch { savedSet = new Set(); }
}

// ─── Build place-row card ─────────────────────────────────────────
function buildRow(place) {
  const c   = cfg(place.category);
  const key = `${place.category}::${place._id}`;
  const sv  = savedSet.has(key);

  let meta = '';
  if (place.rating) meta += `<span class="meta-star">${'★'.repeat(Math.round(+place.rating))}</span> ${place.rating}`;
  if (place.price)  meta += ` <span class="meta-price">$${place.price}</span>`;

  let tags = '';
  if (place.category === 'Cafe'    && place.freeWifi)     tags += `<span class="meta-tag">📶 Wifi</span>`;
  if (place.category === 'Cafe'    && place.outdoorSeating) tags += `<span class="meta-tag">☀️ Outdoor</span>`;
  if (place.category === 'Park'    && place.type)         tags += `<span class="meta-tag">🏃 ${place.type}</span>`;
  if (place.category === 'Vet'     && place.open24h)      tags += `<span class="meta-tag">🕐 24h</span>`;

  let desc = '';
  if (place.category === 'Cafe'    && place.petPolicy)    desc = `Pets: ${place.petPolicy}`;
  if (place.category === 'Groomer' && place.specialFeatures) desc = place.specialFeatures;
  if (place.category === 'Vet'     && place.specialFeatures) desc = place.specialFeatures;

  const el = document.createElement('div');
  el.className = 'place-row';
  el.innerHTML = `
    <div class="place-row-accent ${c.accent}"></div>
    <div class="place-row-thumb">
      ${place.imageURL
        ? `<img src="${place.imageURL}" alt="${place.name}" style="width:96px;height:96px;object-fit:cover;border-radius:inherit;">`
        : `<div style="background:${c.thumbBg};width:100%;height:96px;display:flex;align-items:center;justify-content:center;font-size:28px;border-radius:inherit;">${c.emoji}</div>`
      }
    </div>
    <div class="place-row-body">
      <div class="place-row-name">${place.name}</div>
      <div class="place-row-sub">${place.category} · ${place.borough}</div>
      <div class="place-row-meta">${meta} ${tags}</div>
      ${desc ? `<div class="place-row-desc">${desc}</div>` : ''}
    </div>
    <button class="place-row-save ${sv ? 'saved' : ''}" title="${sv ? 'Saved' : 'Save'}">${sv ? '❤️' : '🤍'}</button>
  `;

  el.querySelector('.place-row-save').addEventListener('click', (e) => {
    e.stopPropagation();
    handleSave(place, e.currentTarget);
  });
  el.addEventListener('click', () => {
    location.href = `detail.html?id=${place._id}&category=${place.category}`;
  });
  return el;
}

async function handleSave(place, btn) {
  if (!auth.ok()) { openModal(); return; }
  const key = `${place.category}::${place._id}`;
  if (savedSet.has(key)) { toast('Already in saved! ❤️'); return; }
  btn.disabled = true;
  try {
    await api('/saved', { method:'POST', body: JSON.stringify({ placeId: place._id, category: place.category }) });
    savedSet.add(key);
    btn.classList.add('saved'); btn.innerHTML = '❤️';
    toast(`${place.name} saved!`, 'ok');
  } catch (e) {
    if (e.status === 400) { savedSet.add(key); btn.classList.add('saved'); btn.innerHTML = '❤️'; }
    else toast(e.message || 'Could not save', 'err');
  }
  btn.disabled = false;
}

// ─── Auth modal ──────────────────────────────────────────────────
function openModal()  { document.getElementById('authModal')?.classList.add('open'); }
function closeModal() { document.getElementById('authModal')?.classList.remove('open'); }

function initModal() {
  const m = document.getElementById('authModal');
  if (!m) return;

  m.addEventListener('click', e => { if (e.target === m) closeModal(); });

  m.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      m.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      m.querySelectorAll('.tab-form').forEach(f => f.style.display = 'none');
      m.querySelector(`#${btn.dataset.tab}Form`).style.display = 'block';
      m.querySelectorAll('.form-err').forEach(e => e.classList.remove('show'));
    });
  });

  m.querySelector('#loginBtn').addEventListener('click', async () => {
    const email = m.querySelector('#lEmail').value.trim();
    const pass  = m.querySelector('#lPass').value;
    const err   = m.querySelector('#lErr');
    err.classList.remove('show');
    if (!email || !pass) { err.textContent='Fill in all fields.'; err.classList.add('show'); return; }
    try {
      const d = await api('/auth/login', { method:'POST', body: JSON.stringify({ email, password: pass }) });
      auth.setTok(d.token); auth.setUser(d.user);
      closeModal(); renderNav();
      toast(`Welcome back, ${d.user.username}! 🐾`, 'ok');
      if (typeof onLoginSuccess === 'function') onLoginSuccess();
    } catch(e) { err.textContent = e.message||'Login failed.'; err.classList.add('show'); }
  });

  m.querySelector('#regBtn').addEventListener('click', async () => {
    const u = m.querySelector('#rUser').value.trim();
    const e2 = m.querySelector('#rEmail').value.trim();
    const p  = m.querySelector('#rPass').value;
    const err = m.querySelector('#rErr');
    err.classList.remove('show');
    if (!u||!e2||!p) { err.textContent='Fill in all fields.'; err.classList.add('show'); return; }
    try {
      const d = await api('/auth/register', { method:'POST', body: JSON.stringify({ username:u, email:e2, password:p }) });
      auth.setTok(d.token); auth.setUser(d.user);
      closeModal(); renderNav();
      toast(`Welcome, ${d.user.username}! 🐾`, 'ok');
      if (typeof onLoginSuccess === 'function') onLoginSuccess();
    } catch(e) { err.textContent = e.message||'Registration failed.'; err.classList.add('show'); }
  });
}

// ─── Nav ─────────────────────────────────────────────────────────
function renderNav() {
  const el = document.getElementById('navRight');
  if (!el) return;
  const u = auth.user();
  if (u) {
    el.innerHTML = `
      <div class="nav-user-row">
        <div class="nav-avatar">${u.username[0].toUpperCase()}</div>
        <span class="nav-username">${u.username}</span>
        <button class="nav-logout" id="logoutBtn">Log out</button>
      </div>`;
    document.getElementById('logoutBtn')?.addEventListener('click', () => {
      auth.rmTok(); auth.rmUser(); savedSet = new Set(); renderNav();
      toast('Logged out. See you next time! 🐾');
      if (typeof onLogout === 'function') onLogout();
    });
  } else {
    el.innerHTML = `<button class="nav-signin" id="openLoginBtn">Log In</button>`;
    document.getElementById('openLoginBtn')?.addEventListener('click', openModal);
  }
}

document.addEventListener('DOMContentLoaded', () => { renderNav(); initModal(); });
