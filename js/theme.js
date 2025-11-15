(function(){
  const KEY = 'theme';
  // อ่านธีมที่เคยบันทึก (ค่าเริ่มต้น: light)
  const saved = localStorage.getItem(KEY) || 'light';
  document.documentElement.setAttribute('data-theme', saved);

  // ฟังก์ชันเปลี่ยนธีม (เรียกจากปุ่ม toggle ที่คุณมีอยู่แล้ว)
  window.setTheme = function(mode){
    const m = (mode === 'dark') ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', m);
    localStorage.setItem(KEY, m);
  };

  // ตัวช่วย toggle
  window.toggleTheme = function(){
    const cur = document.documentElement.getAttribute('data-theme') || 'light';
    window.setTheme(cur === 'dark' ? 'light' : 'dark');
  };
})();