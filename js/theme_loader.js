// theme_loader.js
(function() {
  // อ่านค่า theme ที่บันทึกไว้, ถ้าไม่มีให้ใช้ 'dark' เป็นค่าเริ่มต้น
  const savedTheme = localStorage.getItem('theme') || 'dark';

  // ตรวจสอบค่าที่อ่านได้
  if (savedTheme === 'dark') {
    // ถ้าเป็น 'dark' ให้เพิ่ม class 'dark-mode' เข้าไปในแท็ก <html>
    document.documentElement.classList.add('dark-mode');
  } else {
    // ถ้าไม่ใช่ 'dark' (ก็คือ 'light') ให้ลบ class 'dark-mode' ออก
    document.documentElement.classList.remove('dark-mode');
  }
})();