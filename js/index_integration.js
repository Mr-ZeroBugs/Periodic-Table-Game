(function(){
  const params = new URL(location.href).searchParams;
  const ROOM = params.get('room');

  async function me(){ return (await window.whenAuthReady) || null; }

  window.reportProgress = async (percent) => {
    try{
      if (!ROOM) return;
      const u = await me(); if (!u) return;
      const { db, doc, setDoc, serverTimestamp } = window.firebaseDb || {};
      await setDoc(doc(db,'rooms',ROOM,'players',u.uid), {
        username: (window.currentUsername || 'ผู้เล่น'),
        progress: Math.max(0,Math.min(100,Math.round(percent||0))),
        updatedAt: serverTimestamp?.() || null
      }, { merge: true });
    }catch(e){ console.warn('[reportProgress] err', e); }
  };

  window.reportFinish = async (elapsedMs) => {
    try{
      if (!ROOM) return;
      const u = await me(); if (!u) return;
      const { db, doc, setDoc, serverTimestamp } = window.firebaseDb || {};
      await setDoc(doc(db,'rooms',ROOM,'players',u.uid), {
        username: (window.currentUsername || 'ผู้เล่น'),
        finished: true,
        timeMs: Math.max(0, Math.round(elapsedMs||0)),
        updatedAt: serverTimestamp?.() || null
      }, { merge: true });
    }catch(e){ console.warn('[reportFinish] err', e); }
  };
})();
