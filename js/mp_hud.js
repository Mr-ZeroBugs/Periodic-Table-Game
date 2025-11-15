
(function(){
  try {
    var root = document.documentElement;
    var hasAttr = root.hasAttribute('data-theme');
    if (!hasAttr) {
      var t = localStorage.getItem('theme'); 
      if (t === 'dark' || t === 'light') {
        root.setAttribute('data-theme', t);
      } else {
        var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
      }
    }
  } catch (_) {}
})();


(function() {

    if (window.firebaseDb) {
        initializeCombinedHud();
    } else {
        document.addEventListener('firebase-ready', initializeCombinedHud, { once: true });
    }
})();


function initializeCombinedHud() {
    const ROOM = new URL(location.href).searchParams.get('room');
    if (!ROOM) return;


    if (!document.querySelector('script[src="end_game_modal.js"]')) {
        const modalScript = document.createElement('script');
        modalScript.src = '../js/end_game_modal.js';
        modalScript.defer = true;
        document.body.appendChild(modalScript);
    }
 
    const { db, collection, doc, getDoc, getDocs, onSnapshot, updateDoc, serverTimestamp } = window.firebaseDb;
    const { auth, onAuthStateChanged } = window.firebaseAuth;

    const hud = document.createElement('div');
    hud.id = 'mp-hud';
    hud.innerHTML = `
    <div class="hud-head">
      <span>ห้อง: ${ROOM}</span>
      <button id="manual-finish-btn" title="กดเมื่อคุณเล่นจบแล้ว">จบเกม</button>
      <button id="mp-hud-toggle" title="ซ่อน/แสดง">▾</button>
    </div>
    <div class="hud-body" id="mp-hud-body"></div>
  `;
    document.addEventListener('DOMContentLoaded', () => document.body.appendChild(hud));
    document.addEventListener('click', (e) => {
        if (e.target?.id === 'mp-hud-toggle') hud.classList.toggle('collapsed');
    });

    document.addEventListener('click', async (e) => {
        if (e.target?.id === 'manual-finish-btn') {
            const currentUser = auth.currentUser;
            if (!currentUser) {
                alert('กรุณาล็อกอินก่อน');
                return;
            }

            e.target.disabled = true;
            e.target.textContent = 'ยืนยันแล้ว';

            let capturedTimeMs = null;
            const timerEl = document.getElementById('timer') || document.getElementById('fill-game-timer');
            if (timerEl) {
                const timeParts = timerEl.textContent.split(':').map(part => parseInt(part, 10));
                if (timeParts.length === 2 && !isNaN(timeParts[0]) && !isNaN(timeParts[1])) {
                    capturedTimeMs = (timeParts[0] * 60 + timeParts[1]) * 1000;
                }
            }
            
            const playerDocRef = doc(db, 'rooms', ROOM, 'players', currentUser.uid);
            await updateDoc(playerDocRef, {
                finished: true,
                timeMs: capturedTimeMs,
                updatedAt: serverTimestamp()
            }, { merge: true });

            const playersRef = collection(db, 'rooms', ROOM, 'players');
            const playersSnapshot = await getDocs(playersRef);
            if (playersSnapshot.empty) return;

            const allPlayersFinished = playersSnapshot.docs.every(playerDoc => playerDoc.data().finished === true);

            if (allPlayersFinished) {
                const roomRef = doc(db, 'rooms', ROOM);
                await updateDoc(roomRef, { status: 'finished' });
            }
        }
    });
    
    const body = () => document.getElementById('mp-hud-body');
    const profileCache = new Map();
    async function getProfile(uid) {
        if (profileCache.has(uid)) return profileCache.get(uid);
        try {
            const snap = await getDoc(doc(db, 'users', uid));
            const p = snap.exists() ? snap.data() : null;
            profileCache.set(uid, p);
            return p;
        } catch {
            return null;
        }
    }

    function avatarURL(uid, p) {
        if (p?.avatarUrl) return p.avatarUrl;
        let style = 'bottts',
            seed = p?.avatarSeed || uid?.slice(0, 8) || 'user';
        if (String(seed).includes(':')) {
            const [st, sd] = String(seed).split(':');
            style = st || 'bottts';
            seed = sd || seed;
        }
        return `https://api.dicebear.com/7.x/${style}/svg?seed=${encodeURIComponent(seed)}&size=64&radius=50`;
    }

    function fmt(ms) {
        if (ms == null) return '-';
        const s = Math.floor(ms / 1000),
            m = Math.floor(s / 60),
            ss = String(s % 60).padStart(2, '0');
        return `${m}:${ss}`;
    }

    async function render(docs) {
        const el = body();
        if (!el) return;
        const me = auth?.currentUser?.uid || null;

        const players = [];
        for (const d of docs) {
            const data = d.data();
            const prof = await getProfile(d.id);
            players.push({
                id: d.id,
                username: data.username || prof?.username || ('user-' + (d.id || '').slice(0, 6)),
                progress: typeof data.progress === 'number' ? data.progress : 0,
                finished: !!data.finished,
                timeMs: typeof data.timeMs === 'number' ? data.timeMs : null,
                avatar: avatarURL(d.id, prof)
            });
        }
        
        players.sort((a, b) => {
            if ((a.finished ? 1 : 0) !== (b.finished ? 1 : 0)) return (a.finished ? 1 : 0) - (b.finished ? 1 : 0);
            if (a.finished && b.finished) return (a.timeMs || Infinity) - (b.timeMs || Infinity);
            return (b.progress || 0) - (a.progress || 0);
        });

        el.innerHTML = '';
        if (!players.length) {
            el.innerHTML = '<div style="padding:8px;color:#a4a9b3">ยังไม่มีผู้เล่นในห้อง</div>';
            return;
        }
        for (const p of players) {
            const row = document.createElement('div');
            row.className = 'hud-row' + (p.id === me ? ' me' : '');
            row.innerHTML = `
                <img class="avatar" src="${p.avatar}" alt="">
                <div class="flex">
                    <div class="top">
                        <span class="name">${p.username}</span>
                        <span class="stat">${p.finished ? `⏱ ${fmt(p.timeMs)}` : (p.progress + '%')}</span>
                    </div>
                    <div class="bar"><div class="fill" style="width:${Math.min(100,Math.max(0,p.progress))}%"></div></div>
                </div>
            `;
            el.appendChild(row);
        }
    }
    
    onSnapshot(collection(db, 'rooms', ROOM, 'players'), (snap) => render(snap.docs), (err) => {
        console.error('[mp_hud] onSnapshot error', err);
    });

    let autoFinishTimer = null;
    let gameStartTime = null;
    let roundDuration = 0;

    const roomRef = doc(db, 'rooms', ROOM);
    onSnapshot(roomRef, async (snapshot) => {
        const roomData = snapshot.data();
        
        // เก็บค่า roundSec
        if (roomData?.roundSec) {
            roundDuration = roomData.roundSec * 1000; 
        }

        // เริ่มจับเวลาเมื่อเกมเริ่ม
        if (roomData?.status === 'playing' && !gameStartTime) {
            gameStartTime = Date.now();
            
            // ตั้ง timer เพื่อจบเกมอัตโนมัติ
            if (roundDuration > 0) {
                autoFinishTimer = setTimeout(async () => {
                    const currentUser = auth.currentUser;
                    if (!currentUser) return;

                    // อัปเดตสถานะผู้เล่นเป็นจบเกม (ถ้ายังไม่ได้จบ)
                    const playerDocRef = doc(db, 'rooms', ROOM, 'players', currentUser.uid);
                    const playerSnap = await getDoc(playerDocRef);
                    
                    if (playerSnap.exists() && !playerSnap.data().finished) {
                        await updateDoc(playerDocRef, {
                            finished: true,
                            timeMs: roundDuration,
                            updatedAt: serverTimestamp()
                        });
                    }

                    // ตรวจสอบว่าทุกคนจบหรือยัง
                    const playersRef = collection(db, 'rooms', ROOM, 'players');
                    const playersSnapshot = await getDocs(playersRef);
                    const allFinished = playersSnapshot.docs.every(doc => doc.data().finished === true);

                    if (allFinished) {
                        await updateDoc(roomRef, { status: 'finished' });
                    }
                }, roundDuration);
            }
        }

        // แสดง Modal เมื่อเกมจบ
        if (roomData && roomData.status === 'finished') {
            if (autoFinishTimer) {
                clearTimeout(autoFinishTimer);
                autoFinishTimer = null;
            }
            
            getDocs(collection(db, 'rooms', ROOM, 'players')).then(playersSnapshot => {
                const playersArray = playersSnapshot.docs.map(playerDoc => playerDoc.data());
                playersArray.sort((a, b) => {
                    if (b.progress !== a.progress) return b.progress - a.progress;
                    return (a.timeMs || Infinity) - (b.timeMs || Infinity);
                });

                if (typeof window.showEndGameResults === 'function') {
                    window.showEndGameResults(playersArray);
                }
            });
        }
    });
}
