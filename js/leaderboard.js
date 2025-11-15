import { onSnapshot, collection, query, orderBy, limit, doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const btnMain = document.getElementById('btn-main');
const btnAll = document.getElementById('btn-all');
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error');
const tableEl = document.getElementById('table');
const tbodyEl = document.getElementById('tbody');

const { db } = window.firebaseDb || {};
const { auth } = window.firebaseAuth || {};

let unsub = null;
let currentUser = null;
window.firebaseAuth?.onAuthStateChanged?.(auth, u => currentUser = u);

// Helpers
const fmt = (ms) => {
  const s = Math.floor((ms||0)/1000);
  const m = Math.floor(s/60);
  const ss = String(s % 60).padStart(2,'0');
  return `${m}:${ss}`;
};

function setActive(which){
  if (which === 'main') {
    btnMain.classList.add('active'); btnMain.setAttribute('aria-selected','true');
    btnAll.classList.remove('active'); btnAll.setAttribute('aria-selected','false');
  } else {
    btnAll.classList.add('active'); btnAll.setAttribute('aria-selected','true');
    btnMain.classList.remove('active'); btnMain.setAttribute('aria-selected','false');
  }
}

// Fetch profile from users/{uid}
async function fetchProfile(uid){
  try {
    const ref = doc(db, 'users', uid);
    const snap = await getDoc(ref);
    return snap.exists() ? snap.data() : null;
  } catch { return null; }
}

// Build avatar URL from that user's profile (do NOT use current user)
function avatarFromProfile(uid, profile){
  // Highest priority: explicit avatarUrl
  if (profile?.avatarUrl) return profile.avatarUrl;

   if (profile?.avatarSeed) {
    let style = 'bottts';
    let seed = profile.avatarSeed;
    const i = seed.indexOf(':');
    if (i > -1) {
      style = seed.slice(0, i) || 'bottts';
      seed = seed.slice(i + 1) || 'Lunar';
    }
    return `https://api.dicebear.com/7.x/${style}/svg?seed=${encodeURIComponent(seed)}&size=80&radius=50`;
  }

  // Fallback: identicon from uid
  return `https://api.dicebear.com/7.x/identicon/svg?seed=${encodeURIComponent((uid||'user').slice(0,8))}&size=80&radius=50`;
}

async function renderRows(docs){
  tbodyEl.innerHTML = '';
  let rank = 1;
  for (const d of docs) {
    const row = d.data();
    const tr = document.createElement('tr');
    if (currentUser && d.id === currentUser.uid) tr.classList.add('me');

    const tdRank = document.createElement('td'); tdRank.textContent = rank++;

    const tdPlayer = document.createElement('td'); tdPlayer.className = 'cell-player';
    // Avatar (fetch profile and resolve URL specific to this uid)
    let avatarURL = '';
    try {
      const profile = await fetchProfile(d.id);
      avatarURL = avatarFromProfile(d.id, profile);
    } catch {
      avatarURL = avatarFromProfile(d.id, null);
    }
    const img = document.createElement('img'); img.className='avatar'; img.alt='avatar'; img.src = avatarURL;

    const name = document.createElement('span'); name.textContent = row.username || 'ไม่ระบุชื่อ';
    tdPlayer.append(img, name);

    const tdTime = document.createElement('td'); tdTime.className='time'; tdTime.textContent = typeof row.timeMs==='number' ? fmt(row.timeMs) : '-';

    tr.append(tdRank, tdPlayer, tdTime);
    tbodyEl.appendChild(tr);
  }
  loadingEl.classList.add('hidden');
  tableEl.classList.remove('hidden');
}

function listen(mode){
  if (!db) return;
  if (unsub) { unsub(); unsub = null; }
  setActive(mode);
  loadingEl.classList.remove('hidden');
  errorEl.classList.add('hidden');
  tableEl.classList.add('hidden');
  tbodyEl.innerHTML = '';

  const colName = mode === 'main' ? 'leaderboard_main' : 'leaderboard_all';
  const q = query(collection(db, colName), orderBy('timeMs','asc'), limit(100));
  unsub = onSnapshot(q, async (snap) => {
    await renderRows(snap.docs);
  }, (err) => {
    loadingEl.classList.add('hidden');
    errorEl.textContent = 'โหลดข้อมูลไม่ได้ โปรดลองใหม่หรือตรวจสอบสิทธิ์ Firestore';
    errorEl.classList.remove('hidden');
  });
}

btnMain.addEventListener('click', () => listen('main'));
btnAll.addEventListener('click', () => listen('all'));

listen('main');
