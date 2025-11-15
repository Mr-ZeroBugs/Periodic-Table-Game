(function() {
    if (window.endGameModalLoaded) return;
    window.endGameModalLoaded = true;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../css/modal.css';
    document.head.appendChild(link);

    const modalHTML = `
        <div id="end-game-modal" class="modal-overlay">
          <div class="modal-content">
            <h2>สรุปผลการแข่งขัน</h2>
            <table>
              <thead>
                <tr>
                  <th>อันดับ</th>
                  <th>ชื่อผู้เล่น</th>
                  <th>Progress</th>
                  <th>เวลา</th>
                </tr>
              </thead>
              <tbody id="end-game-body">
                </tbody>
            </table>
            <button id="modal-exit-btn">ออกจากห้อง</button>
          </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const formatTime = (ms) => {
        if (typeof ms !== 'number') return '-';
        const totalSeconds = ms / 1000;
        const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
        const seconds = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
        const milliseconds = (ms % 1000).toString().padStart(3, '0');
        return `${minutes}:${seconds}.${milliseconds}`;
    };

    window.showEndGameResults = (playersArray) => {
        const tableBody = document.getElementById('end-game-body');
        const modal = document.getElementById('end-game-modal');
        if (!tableBody || !modal) return;
        
        tableBody.innerHTML = '';
        playersArray.forEach((player, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${player.username || 'ผู้เล่นนิรนาม'}</td>
                <td>${player.progress || 0}%</td>
                <td>${formatTime(player.timeMs)}</td>
            `;
            tableBody.appendChild(row);
        });
        
        modal.classList.add('visible');
    };

    const exitBtn = document.getElementById('modal-exit-btn');
    if (exitBtn) {
        exitBtn.addEventListener('click', () => {
            window.location.href = '../pages/index.html';
        });
    }

})();