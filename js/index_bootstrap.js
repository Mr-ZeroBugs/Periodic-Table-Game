// index_bootstrap.js (DOM-aware for this project)
// Auto-start when arriving from multiplayer with ?room=&mode=&game=
(function(){
  const q = new URL(location.href).searchParams;
  const ROOM = q.get('room');
  const MODE = q.get('mode');       // 'main_groups' | 'all_elements'
  const GAME = q.get('game');       // 'table' | 'flashcard'

  if (!ROOM || !MODE) return; // single-player flow

  // Expose hooks for multiplayer
  window.reportProgress = (p)=>{ try{ if(window.multiplayer) window.multiplayer.updateProgress(ROOM, Math.max(0,Math.min(100,Math.round(p)))) }catch(e){} };
  window.reportFinish = (ms)=>{ try{ if(window.multiplayer) window.multiplayer.finishRun(ROOM, Math.max(0,Math.round(ms))) }catch(e){} };

  // Show small banner once
  document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('mp-banner')) {
      const bar = document.createElement('div');
      bar.id = 'mp-banner';
      bar.style.cssText = 'position:sticky;top:0;background:#222;color:#fff;padding:8px 12px;z-index:1001;border-bottom:1px solid #333';
      bar.textContent = `Multiplayer room: ${ROOM} | mode: ${MODE}${GAME?(' | game: '+GAME):''}`;
      document.body.prepend(bar);
    }
  });

  // Helpers
  const click = (sel) => { const el = document.querySelector(sel); if (el && typeof el.click==='function') { el.click(); return true; } return false; };

  function selectByMode(){
    // Use your real controls
    if (MODE === 'main_groups') {
      if (click('#select-main-groups-btn')) return true;
    } else {
      if (click('#select-all-btn')) return true;
    }
    return false;
  }

  function chooseGame(){
    // Step 1: open game choice modal (same as user flow)
    click('#start-game-btn');
    if (GAME === 'flashcard') {
      return click('#start-flashcard-game-btn');
    } else {
      // default/fallback: table
      return click('#start-fill-game-btn');
    }
  }

  function attemptStart(){
    // If the game has a public start function, prefer that
    try { if (typeof startGame === 'function') { startGame(); return true; } } catch(e){}
    // Otherwise follow your UI flow: choose game through the modal
    if (chooseGame()) return true;
    return false;
  }

  // Loop attempts for up to ~12s, to handle slow DOM/script loads
  let ticks = 0;
  const t = setInterval(()=>{
    ticks++;
    selectByMode();
    if (attemptStart()) { clearInterval(t); }
    if (ticks > 48) clearInterval(t);
  }, 250);
})();