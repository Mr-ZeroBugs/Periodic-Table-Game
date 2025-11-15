
(() => {
  if (window.__ALL_FEATURES_INIT__) return;
  window.__ALL_FEATURES_INIT__ = true;

  const fdb = window.firebaseDb || {};
  const fauth = window.firebaseAuth || {};
  const { db, serverTimestamp, Timestamp,
          doc, setDoc, getDoc, updateDoc, addDoc, collection,
          onSnapshot, query, orderBy, getDocs } = fdb;

  const auth = fauth?.auth;

  function nowMs(){ return Date.now(); }

  async function getMyProfile() {
    try {
      const u = auth?.currentUser;
      if (!u) return null;
      const snap = await getDoc(doc(db, 'users', u.uid));
      return snap.exists() ? snap.data() : null;
    } catch { return null; }
  }
  async function getMyUsername() {
    const u = auth?.currentUser;
    if (!u) return 'ผู้เล่น';
    const prof = await getMyProfile();
    return prof?.username || u.displayName || (u.email ? u.email.split('@')[0] : ('user-' + u.uid.slice(0,6)));
  }

  function onAuthReady() {
    if (window.whenAuthReady) return window.whenAuthReady;
    window.whenAuthReady = new Promise(resolve => {
      if (auth?.currentUser) return resolve(auth.currentUser);
      fauth.onAuthStateChanged(auth, (u)=> resolve(u || null));
    });
    return window.whenAuthReady;
  }

  async function createRoom({ mode='main_groups', roundSec=180, gameType='table' }={}) {
    const u = await onAuthReady();
    if (!u) throw new Error('ต้องล็อกอินก่อน');
    const roomId = (Math.random().toString(36).slice(2,8) + Math.random().toString(36).slice(2,8)).toUpperCase().slice(0,6);
    const roomRef = doc(db, 'rooms', roomId);
    await setDoc(roomRef, {
      ownerUid: u.uid,
      status: 'lobby',
      mode, gameType,
      roundSec,
      startAt: null,
      createdAt: serverTimestamp?.() || Timestamp?.now?.() || null
    });

    const username = await getMyUsername();
    const pRef = doc(db, 'rooms', roomId, 'players', u.uid);
    await setDoc(pRef, {
      username,
      progress: 0,
      finished: false,
      timeMs: null,
      ready: false,
      joinedAt: serverTimestamp?.() || Timestamp?.now?.() || null,
      updatedAt: serverTimestamp?.() || Timestamp?.now?.() || null
    }, { merge: true });

    return roomId;
  }

  async function joinRoom(roomId) {
    const u = await onAuthReady();
    if (!u) throw new Error('ต้องล็อกอินก่อน');
    const roomRef = doc(db, 'rooms', roomId);
    const snap = await getDoc(roomRef);
    if (!snap.exists()) throw new Error('ไม่พบห้องนี้');

    const username = await getMyUsername();
    const pRef = doc(db, 'rooms', roomId, 'players', u.uid);
    await setDoc(pRef, {
      username,
      progress: 0,
      finished: false,
      timeMs: null,
      ready: false,
      joinedAt: serverTimestamp?.() || Timestamp?.now?.() || null,
      updatedAt: serverTimestamp?.() || Timestamp?.now?.() || null
    }, { merge: true });
    return true;
  }

  async function setReady(roomId, ready=true) {
    const u = await onAuthReady();
    if (!u) throw new Error('ต้องล็อกอินก่อน');
    const pRef = doc(db, 'rooms', roomId, 'players', u.uid);
    await updateDoc(pRef, {
      ready: !!ready,
      updatedAt: serverTimestamp?.() || Timestamp?.now?.() || null
    });
  }

  async function startCountdown(roomId, seconds=5) {
    const u = await onAuthReady();
    if (!u) throw new Error('ต้องล็อกอินก่อน');
    const rRef = doc(db, 'rooms', roomId);
    const rSnap = await getDoc(rRef);
    const data = rSnap.data();
    if (data.ownerUid !== u.uid) throw new Error('เฉพาะเจ้าของห้องเท่านั้น');
    await updateDoc(rRef, {
      status: 'countdown',
      startAt: serverTimestamp?.() || Timestamp?.now?.() || null
    });
  }

  async function updateProgress(roomId, percent) {
    const u = await onAuthReady();
    if (!u) throw new Error('ต้องล็อกอินก่อน');
    const pRef = doc(db, 'rooms', roomId, 'players', u.uid);

    // Ensure username stays fresh in case user changed it
    const username = await getMyUsername();

    await setDoc(pRef, {
      username,
      progress: Math.max(0, Math.min(100, Math.round(percent))),
      updatedAt: serverTimestamp?.() || Timestamp?.now?.() || null
    }, { merge: true });
  }

  async function finishRun(roomId, timeMs) {
    const u = await onAuthReady();
    if (!u) throw new Error('ต้องล็อกอินก่อน');
    const pRef = doc(db, 'rooms', roomId, 'players', u.uid);

    // Freeze username at finish
    const username = await getMyUsername();

    await setDoc(pRef, {
      username,
      finished: true,
      timeMs: Math.max(0, Math.round(timeMs||0)),
      updatedAt: serverTimestamp?.() || Timestamp?.now?.() || null
    }, { merge: true });
  }

  async function leaveRoom(roomId) {
    return true;
  }

  function listenRoom(roomId, { onRoom, onPlayers }={}) {
    const rRef = doc(db, 'rooms', roomId);
    const unsubRoom = onSnapshot(rRef, (snap)=>{
      const d = snap.exists() ? snap.data() : null;
      onRoom && onRoom(d ? ({ id: snap.id, ...d }) : null);
    });

    

    const pRef = collection(db, 'rooms', roomId, 'players');
    const unsubPlayers = onSnapshot(pRef, (snap)=>{
      const arr = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      // normalize & sort
      const norm = arr.map(p => ({
        id: p.id,
        username: p.username || 'ไม่ระบุชื่อ',
        progress: typeof p.progress==='number' ? p.progress : 0,
        finished: !!p.finished,
        timeMs: typeof p.timeMs==='number' ? p.timeMs : null,
        ready: !!p.ready
      }));
      norm.sort((a,b)=>{
        if ((a.finished?1:0)!==(b.finished?1:0)) return (a.finished?1:0)-(b.finished?1:0);
        if (a.finished && b.finished) return (a.timeMs||Infinity)-(b.timeMs||Infinity);
        return (b.progress||0)-(a.progress||0);
      });
      onPlayers && onPlayers(norm);
    });

    return () => { unsubRoom(); unsubPlayers(); };
  }

  window.multiplayer = {
    createRoom, joinRoom, listenRoom,
    setReady, startCountdown,
    updateProgress, finishRun, leaveRoom,
    onAuthReady
  };
})();
