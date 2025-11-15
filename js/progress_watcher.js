// progress_watcher.js — ส่ง % อัตโนมัติด้วยการส่อง DOM (ทำงานเฉพาะมี ?room=)
(function(){
  // อ่านค่า room และ mode จาก URL
  const urlParams = new URL(location.href).searchParams;
  const ROOM = urlParams.get('room');
  const MODE = urlParams.get('mode'); 

  if (!ROOM) return;

  const CFG = Object.assign({
    correctSelectors: ['#fill-periodic-table .correct-placement'],
    throttleMs: 600
  }, window.MP_PROBE_CONFIG || {});

  function uniq(nodes){ return Array.from(new Set(nodes)); }
  function $all(list){ return uniq(list.flatMap(sel => Array.from(document.querySelectorAll(sel)))); }


  function computePercent(){
    let total;

    // เช็คค่า MODE ที่ได้จาก URL เพื่อกำหนดจำนวนข้อทั้งหมด
    if (MODE === 'main_groups') {
      total = 50; // ถ้าเป็นโหมด 8 หมู่หลัก ให้ใช้ 50
    } else {
      total = 118; // ถ้าเป็นโหมดอื่น (all) หรือไม่ระบุ ให้ใช้ 118
    }

    const correct = $all(CFG.correctSelectors).length;
    if (!total) return null; // ป้องกันการหารด้วยศูนย์

    return Math.max(0, Math.min(100, Math.round((correct / total) * 100)));
  }

  let last=-1, lastAt=0;
  function maybeSend(){
    const now = Date.now();
    if (now - lastAt < CFG.throttleMs) return;
    const pct = computePercent();
    if (pct==null || pct===last) return;
    if (typeof window.reportProgress === 'function') {
      window.reportProgress(pct);
      last = pct; lastAt = now;
    }
  }

  const obs = new MutationObserver(()=> maybeSend());
  window.addEventListener('load', ()=>{
    obs.observe(document.body, { childList:true, subtree:true, attributes:true });
    setTimeout(maybeSend, 800);
  });
  setInterval(maybeSend, 1500);
})();