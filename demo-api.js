// ─── Static demo backend ─────────────────────────────────────────
// Mirrors the NYPetD Express API (routes/places, saved, auth) in the
// browser so the site runs without a server. Places come from a data
// snapshot; accounts and saved places live in this browser only.
const demoStore = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};

function demoDistance(lat1, lng1, lat2, lng2) {
  if (lat2 == null || lng2 == null) return Infinity;
  const R = 6371, r = x => x * Math.PI / 180;
  const a = Math.sin(r(lat2 - lat1) / 2) ** 2 +
            Math.cos(r(lat1)) * Math.cos(r(lat2)) * Math.sin(r(lng2 - lng1) / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function demoErr(status, message) { return Object.assign(new Error(message), { status }); }

function demoCurrentUser() {
  const tok = localStorage.getItem('npd3_token');
  return tok ? tok.replace(/^demo-/, '') : null;
}

function demoGetPlaces(q) {
  let list = DEMO_PLACES.slice();
  const cat = q.get('category');
  if (cat && cat !== 'all') list = list.filter(p => p.category.toLowerCase() === cat.toLowerCase());
  const bor = q.get('borough');
  if (bor && bor !== 'all') list = list.filter(p => (p.borough || '').toLowerCase() === bor.toLowerCase());
  const s = q.get('search');
  if (s) list = list.filter(p => p.name.toLowerCase().includes(s.toLowerCase()));
  if (cat === 'Cafe') {
    if (q.get('wifi') === 'true')    list = list.filter(p => p.freeWifi === true);
    if (q.get('outdoor') === 'true') list = list.filter(p => p.outdoorSeating === true);
  }
  if (cat === 'Vet' && q.get('open24h') === 'true') list = list.filter(p => p.open24h === true);

  const sort = q.get('sort');
  if (sort === 'rating-high') list.sort((a, b) => (b.rating ?? -Infinity) - (a.rating ?? -Infinity));
  if (sort === 'rating-low')  list.sort((a, b) => (a.rating ?? Infinity) - (b.rating ?? Infinity));
  if (sort === 'name-az')     list.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === 'nearest' && q.get('lat') && q.get('lng')) {
    const lat = +q.get('lat'), lng = +q.get('lng');
    const d = p => demoDistance(lat, lng, p.location?.coordinates?.[1], p.location?.coordinates?.[0]);
    list.sort((a, b) => d(a) - d(b));
  }
  return list;
}

async function demoApi(path, opts = {}) {
  const method = (opts.method || 'GET').toUpperCase();
  const body = opts.body ? JSON.parse(opts.body) : {};
  const [route, qs] = path.split('?');
  const q = new URLSearchParams(qs || '');
  const parts = route.split('/').filter(Boolean);

  // ── places ──
  if (parts[0] === 'places') {
    if (parts.length === 1) { const data = demoGetPlaces(q); return { count: data.length, data }; }
    if (parts[1] === 'boroughs') return { data: [...new Set(DEMO_PLACES.map(p => p.borough))].sort() };
    if (parts.length === 3) {
      const p = DEMO_PLACES.find(x => x._id === parts[2] && x.category.toLowerCase() === parts[1].toLowerCase());
      if (!p) throw demoErr(404, 'Place not found');
      return { data: p };
    }
  }

  // ── auth ──
  if (parts[0] === 'auth') {
    const users = demoStore.get('npd3_demo_users', {});
    if (parts[1] === 'register') {
      if (!body.username || !body.email || !body.password) throw demoErr(400, 'username, email and password are required');
      if (users[body.email]) throw demoErr(400, 'Email or username already exists');
      users[body.email] = { username: body.username, email: body.email, password: body.password };
      demoStore.set('npd3_demo_users', users);
    } else if (parts[1] === 'login') {
      const u = users[body.email];
      if (!u || u.password !== body.password) throw demoErr(401, 'Invalid email or password');
    }
    const u = users[body.email];
    return { token: 'demo-' + u.email, user: { username: u.username, email: u.email } };
  }

  // ── saved (requires login) ──
  if (parts[0] === 'saved') {
    const me = demoCurrentUser();
    if (!me) throw demoErr(401, 'Not authorized, please log in');
    const all = demoStore.get('npd3_demo_saved', {});
    const mine = all[me] || [];
    const save = () => { all[me] = mine; demoStore.set('npd3_demo_saved', all); };

    if (method === 'GET' && parts[1] === 'check') {
      return { saved: mine.some(s => s.placeId === q.get('placeId') && s.category === q.get('category')) };
    }
    if (method === 'GET') {
      const data = mine.map(s => {
        const p = DEMO_PLACES.find(x => x._id === s.placeId && x.category === s.category);
        return p ? { savedId: s.savedId, ...p } : null;
      }).filter(Boolean);
      return { count: data.length, data };
    }
    if (method === 'POST') {
      if (mine.some(s => s.placeId === body.placeId && s.category === body.category)) throw demoErr(400, 'Place already saved');
      mine.unshift({ savedId: 's' + Date.now(), placeId: body.placeId, category: body.category });
      save(); return { message: 'Place saved' };
    }
    if (method === 'DELETE') {
      const i = mine.findIndex(s => s.savedId === parts[1]);
      if (i < 0) throw demoErr(404, 'Saved entry not found');
      mine.splice(i, 1); save(); return { message: 'Place removed from saved' };
    }
  }

  throw demoErr(404, 'Not found');
}
