

document.addEventListener('DOMContentLoaded', () => {
    

    const elements = [
        { "number": 1, "symbol": "H", "name": "ไฮโดรเจน", "mass": 1.008, "category": "diatomic-nonmetal", "y": 1, "x": 1 },
        { "number": 3, "symbol": "Li", "name": "ลิเทียม", "mass": 6.94, "category": "alkali-metal", "y": 2, "x": 1 },
        { "number": 11, "symbol": "Na", "name": "โซเดียม", "mass": 22.990, "category": "alkali-metal", "y": 3, "x": 1 },
        { "number": 19, "symbol": "K", "name": "โพแทสเซียม", "mass": 39.098, "category": "alkali-metal", "y": 4, "x": 1 },
        { "number": 37, "symbol": "Rb", "name": "รูบิเดียม", "mass": 85.468, "category": "alkali-metal", "y": 5, "x": 1 },
        { "number": 55, "symbol": "Cs", "name": "ซีเซียม", "mass": 132.91, "category": "alkali-metal", "y": 6, "x": 1 },
        { "number": 87, "symbol": "Fr", "name": "แฟรนเซียม", "mass": 223, "category": "alkali-metal", "y": 7, "x": 1 },
        { "number": 4, "symbol": "Be", "name": "เบริลเลียม", "mass": 9.0122, "category": "alkaline-earth-metal", "y": 2, "x": 2 },
        { "number": 12, "symbol": "Mg", "name": "แมกนีเซียม", "mass": 24.305, "category": "alkaline-earth-metal", "y": 3, "x": 2 },
        { "number": 20, "symbol": "Ca", "name": "แคลเซียม", "mass": 40.078, "category": "alkaline-earth-metal", "y": 4, "x": 2 },
        { "number": 38, "symbol": "Sr", "name": "สตรอนเชียม", "mass": 87.62, "category": "alkaline-earth-metal", "y": 5, "x": 2 },
        { "number": 56, "symbol": "Ba", "name": "แบเรียม", "mass": 137.33, "category": "alkaline-earth-metal", "y": 6, "x": 2 },
        { "number": 88, "symbol": "Ra", "name": "เรเดียม", "mass": 226, "category": "alkaline-earth-metal", "y": 7, "x": 2 },
        { "number": 5, "symbol": "B", "name": "โบรอน", "mass": 10.81, "category": "metalloid", "y": 2, "x": 13 },
        { "number": 13, "symbol": "Al", "name": "อะลูมิเนียม", "mass": 26.982, "category": "post-transition-metal", "y": 3, "x": 13 },
        { "number": 31, "symbol": "Ga", "name": "แกลเลียม", "mass": 69.723, "category": "post-transition-metal", "y": 4, "x": 13 },
        { "number": 49, "symbol": "In", "name": "อินเดียม", "mass": 114.82, "category": "post-transition-metal", "y": 5, "x": 13 },
        { "number": 81, "symbol": "Tl", "name": "แทลเลียม", "mass": 204.38, "category": "post-transition-metal", "y": 6, "x": 13 },
        { "number": 113, "symbol": "Nh", "name": "นิโฮเนียม", "mass": 286, "category": "post-transition-metal", "y": 7, "x": 13 },
        { "number": 6, "symbol": "C", "name": "คาร์บอน", "mass": 12.011, "category": "polyatomic-nonmetal", "y": 2, "x": 14 },
        { "number": 14, "symbol": "Si", "name": "ซิลิคอน", "mass": 28.085, "category": "metalloid", "y": 3, "x": 14 },
        { "number": 32, "symbol": "Ge", "name": "เจอร์เมเนียม", "mass": 72.630, "category": "metalloid", "y": 4, "x": 14 },
        { "number": 50, "symbol": "Sn", "name": "ดีบุก", "mass": 118.71, "category": "post-transition-metal", "y": 5, "x": 14 },
        { "number": 82, "symbol": "Pb", "name": "ตะกั่ว", "mass": 207.2, "category": "post-transition-metal", "y": 6, "x": 14 },
        { "number": 114, "symbol": "Fl", "name": "ฟลีโรเวียม", "mass": 289, "category": "post-transition-metal", "y": 7, "x": 14 },
        { "number": 7, "symbol": "N", "name": "ไนโตรเจน", "mass": 14.007, "category": "diatomic-nonmetal", "y": 2, "x": 15 },
        { "number": 15, "symbol": "P", "name": "ฟอสฟอรัส", "mass": 30.974, "category": "polyatomic-nonmetal", "y": 3, "x": 15 },
        { "number": 33, "symbol": "As", "name": "สารหนู", "mass": 74.922, "category": "metalloid", "y": 4, "x": 15 },
        { "number": 51, "symbol": "Sb", "name": "พลวง", "mass": 121.76, "category": "metalloid", "y": 5, "x": 15 },
        { "number": 83, "symbol": "Bi", "name": "บิสมัท", "mass": 208.98, "category": "post-transition-metal", "y": 6, "x": 15 },
        { "number": 115, "symbol": "Mc", "name": "มอสโกเวียม", "mass": 290, "category": "post-transition-metal", "y": 7, "x": 15 },
        { "number": 8, "symbol": "O", "name": "ออกซิเจน", "mass": 15.999, "category": "diatomic-nonmetal", "y": 2, "x": 16 },
        { "number": 16, "symbol": "S", "name": "กำมะถัน", "mass": 32.06, "category": "polyatomic-nonmetal", "y": 3, "x": 16 },
        { "number": 34, "symbol": "Se", "name": "ซีลีเนียม", "mass": 78.971, "category": "polyatomic-nonmetal", "y": 4, "x": 16 },
        { "number": 52, "symbol": "Te", "name": "เทลลูเรียม", "mass": 127.60, "category": "metalloid", "y": 5, "x": 16 },
        { "number": 84, "symbol": "Po", "name": "โพโลเนียม", "mass": 209, "category": "metalloid", "y": 6, "x": 16 },
        { "number": 116, "symbol": "Lv", "name": "ลิเวอร์มอเรียม", "mass": 293, "category": "post-transition-metal", "y": 7, "x": 16 },
        { "number": 9, "symbol": "F", "name": "ฟลูออรีน", "mass": 18.998, "category": "diatomic-nonmetal", "y": 2, "x": 17 },
        { "number": 17, "symbol": "Cl", "name": "คลอรีน", "mass": 35.45, "category": "diatomic-nonmetal", "y": 3, "x": 17 },
        { "number": 35, "symbol": "Br", "name": "โบรมีน", "mass": 79.904, "category": "diatomic-nonmetal", "y": 4, "x": 17 },
        { "number": 53, "symbol": "I", "name": "ไอโอดีน", "mass": 126.90, "category": "diatomic-nonmetal", "y": 5, "x": 17 },
        { "number": 85, "symbol": "At", "name": "แอสทาทีน", "mass": 210, "category": "diatomic-nonmetal", "y": 6, "x": 17 },
        { "number": 117, "symbol": "Ts", "name": "เทนเนสซีน", "mass": 294, "category": "diatomic-nonmetal", "y": 7, "x": 17 },
        { "number": 2, "symbol": "He", "name": "ฮีเลียม", "mass": 4.0026, "category": "noble-gas", "y": 1, "x": 18 },
        { "number": 10, "symbol": "Ne", "name": "นีออน", "mass": 20.180, "category": "noble-gas", "y": 2, "x": 18 },
        { "number": 18, "symbol": "Ar", "name": "อาร์กอน", "mass": 39.948, "category": "noble-gas", "y": 3, "x": 18 },
        { "number": 36, "symbol": "Kr", "name": "คริปทอน", "mass": 83.798, "category": "noble-gas", "y": 4, "x": 18 },
        { "number": 54, "symbol": "Xe", "name": "ซีนอน", "mass": 131.29, "category": "noble-gas", "y": 5, "x": 18 },
        { "number": 86, "symbol": "Rn", "name": "เรดอน", "mass": 222, "category": "noble-gas", "y": 6, "x": 18 },
        { "number": 118, "symbol": "Og", "name": "โอกาเนสซอน", "mass": 294, "category": "noble-gas", "y": 7, "x": 18 },
        { "number": 21, "symbol": "Sc", "name": "สแกนเดียม", "mass": 44.956, "category": "transition-metal", "y": 4, "x": 3 },
        { "number": 22, "symbol": "Ti", "name": "ไทเทเนียม", "mass": 47.867, "category": "transition-metal", "y": 4, "x": 4 },
        { "number": 23, "symbol": "V", "name": "วาเนเดียม", "mass": 50.942, "category": "transition-metal", "y": 4, "x": 5 },
        { "number": 24, "symbol": "Cr", "name": "โครเมียม", "mass": 51.996, "category": "transition-metal", "y": 4, "x": 6 },
        { "number": 25, "symbol": "Mn", "name": "แมงกานีส", "mass": 54.938, "category": "transition-metal", "y": 4, "x": 7 },
        { "number": 26, "symbol": "Fe", "name": "เหล็ก", "mass": 55.845, "category": "transition-metal", "y": 4, "x": 8 },
        { "number": 27, "symbol": "Co", "name": "โคบอลต์", "mass": 58.933, "category": "transition-metal", "y": 4, "x": 9 },
        { "number": 28, "symbol": "Ni", "name": "นิกเกิล", "mass": 58.693, "category": "transition-metal", "y": 4, "x": 10 },
        { "number": 29, "symbol": "Cu", "name": "ทองแดง", "mass": 63.546, "category": "transition-metal", "y": 4, "x": 11 },
        { "number": 30, "symbol": "Zn", "name": "สังกะสี", "mass": 65.38, "category": "transition-metal", "y": 4, "x": 12 },
        { "number": 39, "symbol": "Y", "name": "อิตเทรียม", "mass": 88.906, "category": "transition-metal", "y": 5, "x": 3 },
        { "number": 40, "symbol": "Zr", "name": "เซอร์โคเนียม", "mass": 91.224, "category": "transition-metal", "y": 5, "x": 4 },
        { "number": 41, "symbol": "Nb", "name": "ไนโอเบียม", "mass": 92.906, "category": "transition-metal", "y": 5, "x": 5 },
        { "number": 42, "symbol": "Mo", "name": "โมลิบดีนัม", "mass": 95.95, "category": "transition-metal", "y": 5, "x": 6 },
        { "number": 43, "symbol": "Tc", "name": "เทคนีเชียม", "mass": 98, "category": "transition-metal", "y": 5, "x": 7 },
        { "number": 44, "symbol": "Ru", "name": "รูทีเนียม", "mass": 101.07, "category": "transition-metal", "y": 5, "x": 8 },
        { "number": 45, "symbol": "Rh", "name": "โรเดียม", "mass": 102.91, "category": "transition-metal", "y": 5, "x": 9 },
        { "number": 46, "symbol": "Pd", "name": "แพลเลเดียม", "mass": 106.42, "category": "transition-metal", "y": 5, "x": 10 },
        { "number": 47, "symbol": "Ag", "name": "เงิน", "mass": 107.87, "category": "transition-metal", "y": 5, "x": 11 },
        { "number": 48, "symbol": "Cd", "name": "แคดเมียม", "mass": 112.41, "category": "transition-metal", "y": 5, "x": 12 },
        { "number": 72, "symbol": "Hf", "name": "แฮฟเนียม", "mass": 178.49, "category": "transition-metal", "y": 6, "x": 4 },
        { "number": 73, "symbol": "Ta", "name": "แทนทาลัม", "mass": 180.95, "category": "transition-metal", "y": 6, "x": 5 },
        { "number": 74, "symbol": "W", "name": "ทังสเตน", "mass": 183.84, "category": "transition-metal", "y": 6, "x": 6 },
        { "number": 75, "symbol": "Re", "name": "รีเนียม", "mass": 186.21, "category": "transition-metal", "y": 6, "x": 7 },
        { "number": 76, "symbol": "Os", "name": "ออสเมียม", "mass": 190.23, "category": "transition-metal", "y": 6, "x": 8 },
        { "number": 77, "symbol": "Ir", "name": "อิริเดียม", "mass": 192.22, "category": "transition-metal", "y": 6, "x": 9 },
        { "number": 78, "symbol": "Pt", "name": "แพลทินัม", "mass": 195.08, "category": "transition-metal", "y": 6, "x": 10 },
        { "number": 79, "symbol": "Au", "name": "ทองคำ", "mass": 196.97, "category": "transition-metal", "y": 6, "x": 11 },
        { "number": 80, "symbol": "Hg", "name": "ปรอท", "mass": 200.59, "category": "transition-metal", "y": 6, "x": 12 },
        { "number": 104, "symbol": "Rf", "name": "รัทเทอร์ฟอร์เดียม", "mass": 267, "category": "transition-metal", "y": 7, "x": 4 },
        { "number": 105, "symbol": "Db", "name": "ดุบเนียม", "mass": 268, "category": "transition-metal", "y": 7, "x": 5 },
        { "number": 106, "symbol": "Sg", "name": "ซีบอร์เกียม", "mass": 269, "category": "transition-metal", "y": 7, "x": 6 },
        { "number": 107, "symbol": "Bh", "name": "โบห์เรียม", "mass": 270, "category": "transition-metal", "y": 7, "x": 7 },
        { "number": 108, "symbol": "Hs", "name": "ฮัสเซียม", "mass": 277, "category": "transition-metal", "y": 7, "x": 8 },
        { "number": 109, "symbol": "Mt", "name": "ไมต์เนเรียม", "mass": 278, "category": "transition-metal", "y": 7, "x": 9 },
        { "number": 110, "symbol": "Ds", "name": "ดาร์มสตัดเทียม", "mass": 281, "category": "transition-metal", "y": 7, "x": 10 },
        { "number": 111, "symbol": "Rg", "name": "เรินต์เกเนียม", "mass": 282, "category": "transition-metal", "y": 7, "x": 11 },
        { "number": 112, "symbol": "Cn", "name": "โคเปอร์นิเซียม", "mass": 285, "category": "transition-metal", "y": 7, "x": 12 },
        { "number": 57, "symbol": "La", "name": "แลนทานัม", "mass": 138.91, "category": "lanthanide", "y": 9, "x": 3 },
        { "number": 58, "symbol": "Ce", "name": "ซีเรียม", "mass": 140.12, "category": "lanthanide", "y": 9, "x": 4 },
        { "number": 59, "symbol": "Pr", "name": "เพรซีโอดิเมียม", "mass": 140.91, "category": "lanthanide", "y": 9, "x": 5 },
        { "number": 60, "symbol": "Nd", "name": "นีโอดิเมียม", "mass": 144.24, "category": "lanthanide", "y": 9, "x": 6 },
        { "number": 61, "symbol": "Pm", "name": "โพรมีเทียม", "mass": 145, "category": "lanthanide", "y": 9, "x": 7 },
        { "number": 62, "symbol": "Sm", "name": "ซาแมเรียม", "mass": 150.36, "category": "lanthanide", "y": 9, "x": 8 },
        { "number": 63, "symbol": "Eu", "name": "ยูโรเพียม", "mass": 151.96, "category": "lanthanide", "y": 9, "x": 9 },
        { "number": 64, "symbol": "Gd", "name": "แกโดลิเนียม", "mass": 157.25, "category": "lanthanide", "y": 9, "x": 10 },
        { "number": 65, "symbol": "Tb", "name": "เทอร์เบียม", "mass": 158.93, "category": "lanthanide", "y": 9, "x": 11 },
        { "number": 66, "symbol": "Dy", "name": "ดิสโพรเซียม", "mass": 162.50, "category": "lanthanide", "y": 9, "x": 12 },
        { "number": 67, "symbol": "Ho", "name": "โฮลเมียม", "mass": 164.93, "category": "lanthanide", "y": 9, "x": 13 },
        { "number": 68, "symbol": "Er", "name": "เออร์เบียม", "mass": 167.26, "category": "lanthanide", "y": 9, "x": 14 },
        { "number": 69, "symbol": "Tm", "name": "ทูเลียม", "mass": 168.93, "category": "lanthanide", "y": 9, "x": 15 },
        { "number": 70, "symbol": "Yb", "name": "อิตเทอร์เบียม", "mass": 173.05, "category": "lanthanide", "y": 9, "x": 16 },
        { "number": 71, "symbol": "Lu", "name": "ลูทีเชียม", "mass": 174.97, "category": "lanthanide", "y": 9, "x": 17 },
        { "number": 89, "symbol": "Ac", "name": "แอกทิเนียม", "mass": 227, "category": "actinide", "y": 10, "x": 3 },
        { "number": 90, "symbol": "Th", "name": "ทอเรียม", "mass": 232.04, "category": "actinide", "y": 10, "x": 4 },
        { "number": 91, "symbol": "Pa", "name": "โพรแทกทิเนียม", "mass": 231.04, "category": "actinide", "y": 10, "x": 5 },
        { "number": 92, "symbol": "U", "name": "ยูเรเนียม", "mass": 238.03, "category": "actinide", "y": 10, "x": 6 },
        { "number": 93, "symbol": "Np", "name": "เนปทูเนียม", "mass": 237, "category": "actinide", "y": 10, "x": 7 },
        { "number": 94, "symbol": "Pu", "name": "พลูโทเนียม", "mass": 244, "category": "actinide", "y": 10, "x": 8 },
        { "number": 95, "symbol": "Am", "name": "อะเมริเซียม", "mass": 243, "category": "actinide", "y": 10, "x": 9 },
        { "number": 96, "symbol": "Cm", "name": "คูเรียม", "mass": 247, "category": "actinide", "y": 10, "x": 10 },
        { "number": 97, "symbol": "Bk", "name": "เบอร์คีเลียม", "mass": 247, "category": "actinide", "y": 10, "x": 11 },
        { "number": 98, "symbol": "Cf", "name": "แคลิฟอร์เนียม", "mass": 251, "category": "actinide", "y": 10, "x": 12 },
        { "number": 99, "symbol": "Es", "name": "ไอน์สไตเนียม", "mass": 252, "category": "actinide", "y": 10, "x": 13 },
        { "number": 100, "symbol": "Fm", "name": "เฟอร์เมียม", "mass": 257, "category": "actinide", "y": 10, "x": 14 },
        { "number": 101, "symbol": "Md", "name": "เมนเดลีเวียม", "mass": 258, "category": "actinide", "y": 10, "x": 15 },
        { "number": 102, "symbol": "No", "name": "โนเบเลียม", "mass": 259, "category": "actinide", "y": 10, "x": 16 },
        { "number": 103, "symbol": "Lr", "name": "ลอว์เรนเซียม", "mass": 266, "category": "actinide", "y": 10, "x": 17 }
    ];
    window.periodicElements = elements;
    
    const categories = {
        "alkali-metal": "โลหะแอลคาไล", "alkaline-earth-metal": "โลหะแอลคาไลน์เอิร์ท", "lanthanide": "แลนทาไนด์",
        "actinide": "แอกทิไนด์", "transition-metal": "โลหะแทรนซิชัน", "post-transition-metal": "โลหะหลังแทรนซิชัน",
        "metalloid": "ธาตุกึ่งโลหะ", "diatomic-nonmetal": "อโลหะ (ไดอะตอม)", "polyatomic-nonmetal": "อโลหะ (พอลิอะตอม)",
        "noble-gas": "แก๊สมีสกุล",
    };

    const DESKTOP_DEFAULT_CELL_SIZE = 65;
    const MOBILE_DEFAULT_CELL_SIZE = 52;

    const selectionScreen = document.getElementById('selection-screen');
    const gameScreen = document.getElementById('game-screen');
    const periodicTable = document.getElementById('periodic-table');
    const legendContainer = document.getElementById('legend');
    const startGameBtn = document.getElementById('start-game-btn');
    const selectAllBtn = document.getElementById('select-all-btn');
    const deselectAllBtn = document.getElementById('deselect-all-btn');
    const selectMainGroupsBtn = document.getElementById('select-main-groups-btn');
    const randomOrderCheckbox = document.getElementById('random-order-checkbox');
    const flashcard = document.getElementById('flashcard');
    const cardFront = document.getElementById('card-front');
    const cardBack = document.getElementById('card-back');
    const flipCardBtn = document.getElementById('flip-card-btn');
    const nextCardBtn = document.getElementById('next-card-btn');
    const backToSelectionBtn = document.getElementById('back-to-selection-btn');
    const settingsBtn = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const lightModeBtn = document.getElementById('light-mode-btn');
    const darkModeBtn = document.getElementById('dark-mode-btn');
    const gameModeRadios = document.querySelectorAll('input[name="game-mode"]');
    const gameChoiceModal = document.getElementById('game-choice-modal');
    const closeChoiceModalBtn = document.getElementById('close-choice-modal-btn');
    const startFlashcardGameBtn = document.getElementById('start-flashcard-game-btn');
    const startFillGameBtn = document.getElementById('start-fill-game-btn');
    const fillGameScreen = document.getElementById('fill-game-screen');
    const elementBank = document.getElementById('element-bank');
    const fillPeriodicTable = document.getElementById('fill-periodic-table');
    const checkAnswersBtn = document.getElementById('check-answers-btn');
    const fillBackToSelectionBtn = document.getElementById('fill-back-to-selection-btn');
    const customGroupsBtn = document.getElementById('custom-groups-btn');
    const customGroupsModal = document.getElementById('custom-groups-modal');
    const closeCustomGroupsModalBtn = document.getElementById('close-custom-groups-modal-btn');
    const customGroupsList = document.getElementById('custom-groups-list');
    const createNewGroupBtn = document.getElementById('create-new-group-btn');
    const saveGroupModal = document.getElementById('save-group-modal');
    const closeSaveGroupModalBtn = document.getElementById('close-save-group-modal-btn');
    const newGroupNameInput = document.getElementById('new-group-name-input');
    const saveNewGroupBtn = document.getElementById('save-new-group-btn');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const loginContainer = document.getElementById('login-container');
    const profileContainer = document.getElementById('profile-container');
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const profilePic = document.getElementById('profile-pic');
    const usernameDisplay = document.getElementById('username-display');
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const editProfileModal = document.getElementById('edit-profile-modal');
    const closeEditProfileModalBtn = document.getElementById('close-edit-profile-modal-btn');
    const newUsernameInput = document.getElementById('new-username-input');
    const saveProfileBtn = document.getElementById('save-profile-btn');
    const profileUpdateFeedback = document.getElementById('profile-update-feedback');
    const cellWidthSlider = document.getElementById('cell-width-slider');
    const cellWidthValue = document.getElementById('cell-width-value');
    const cellHeightSlider = document.getElementById('cell-height-slider');
    const cellHeightValue = document.getElementById('cell-height-value');
    const resetSizeBtn = document.getElementById('reset-size-btn');

    const fillGameTimer = document.getElementById('fill-game-timer');
    const bestTimeAllSpan = document.getElementById('best-time-all');
    const bestTimeMainSpan = document.getElementById('best-time-main');

    let selectedElementsData = [];
    let currentCardIndex = 0;
    let fillGameElements = [];
    let currentFillElementIndex = 0;
    let placedElements = {};
    let isCreatingGroup = false;
    let touchState = { isDragging: false, draggedElement: null, originalElement: null, source: null, originPlaceholder: null };
    let gameTimerInterval = null;
    let gameStartTime = 0;
    let userBestTimes = {};
    let currentGameModeKey = null;
    let lastSelectionMode = null;

    const { auth, provider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } = window.firebaseAuth;
    const { db, doc, getDoc, setDoc } = window.firebaseDb;

    const formatTime = (seconds) => {
        if (seconds === null || typeof seconds === 'undefined') return 'N/A';
        const floorSeconds = Math.floor(seconds);
        const min = String(Math.floor(floorSeconds / 60)).padStart(2, '0');
        const sec = String(floorSeconds % 60).padStart(2, '0');
        return `${min}:${sec}`;
    };

    const startTimer = () => {
        if (gameTimerInterval) clearInterval(gameTimerInterval);
        gameStartTime = Date.now();
        fillGameTimer.textContent = '00:00';
        gameTimerInterval = setInterval(() => {
            const elapsedTime = (Date.now() - gameStartTime) / 1000;
            fillGameTimer.textContent = formatTime(elapsedTime);
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(gameTimerInterval);
        gameTimerInterval = null;
        return (Date.now() - gameStartTime) / 1000;
    };

    const fetchUserBestTimes = async (userId) => {
        if (!userId) return;
        const userDocRef = doc(db, 'userBestTimes', userId);
        try {
            const docSnap = await getDoc(userDocRef);
            userBestTimes = docSnap.exists() && docSnap.data().bestTimes ? docSnap.data().bestTimes : {};
        } catch (error) {
            console.error("Error fetching best times:", error);
            userBestTimes = {};
        }
        updateBestTimesUI();
    };

    
    const saveLeaderboardRecord = async (gameKey, timeSeconds) => {
        try {
            const user = auth.currentUser;
            if (!user) return;
            const colName = (gameKey === 'main_groups') ? 'leaderboard_main' : 'leaderboard_all';
            const ref = doc(db, colName, user.uid);
            const snap = await getDoc(ref);
            const username = user.displayName || (user.email ? user.email.split('@')[0] : 'ไม่ระบุชื่อ');
            const timeMs = Math.max(0, Math.round((Number(timeSeconds) || 0) * 1000));
            const prev = snap.exists() && typeof snap.data().timeMs === 'number' ? snap.data().timeMs : Infinity;
            if (timeMs < prev) {
                await setDoc(ref, { username, timeMs, updatedAt: Date.now() }, { merge: true });
                console.log('[Leaderboard] Updated', colName, timeMs);
            }
        } catch (e) {
            console.warn('[Leaderboard] save failed', e);
        }
    };
    window.saveLeaderboard = (modeOrKey, timeMs) => {
        const key = (modeOrKey === 'main') ? 'main_groups'
                  : (modeOrKey === 'all') ? 'all_elements'
                  : modeOrKey;
        const secs = (Number(timeMs) || 0) / 1000;
        return saveLeaderboardRecord(key, secs);
    };
 
    const applyUsernameToLeaderboard = async (newName) => {
        try {
            const user = auth.currentUser;
            if (!user) return;
            const cols = ['leaderboard_main', 'leaderboard_all'];
            await Promise.all(
                cols.map(async (col) => {
                    const ref = doc(db, col, user.uid);
                    const snap = await getDoc(ref);
                    if (snap.exists()) {
                        await setDoc(ref, { username: newName, updatedAt: Date.now() }, { merge: true });
                    }
                })
            );
            console.log('[Leaderboard] Username synced:', newName);
        } catch (e) {
            console.warn('[Leaderboard] Username sync failed', e);
        }
    };


const updateUserBestTime = async (userId, gameKey, newTime) => {
        if (!userId || !gameKey) return;
        const currentBest = userBestTimes[gameKey] || Infinity;
        if (newTime < currentBest) {
            userBestTimes[gameKey] = newTime;
            const userDocRef = doc(db, 'userBestTimes', userId);
            try {
                await setDoc(userDocRef, { bestTimes: userBestTimes }, { merge: true });
                console.log(`New best time for ${gameKey}: ${newTime}`);
                updateBestTimesUI();
                // ส่งผลไปยัง Leaderboard ด้วย
                saveLeaderboardRecord(gameKey, newTime);

            } catch (error) {
                console.error("Error updating best time:", error);
            }
        }
    };

    const updateBestTimesUI = () => {
        bestTimeAllSpan.textContent = formatTime(userBestTimes.all_elements);
        bestTimeMainSpan.textContent = formatTime(userBestTimes.main_groups);
        if (!customGroupsModal.classList.contains('hidden')) {
            populateCustomGroupsModal();
        }
    };

    const setTheme = (theme) => {
        document.body.className = `${theme}-mode`;
        lightModeBtn.classList.toggle('active', theme === 'light');
        darkModeBtn.classList.toggle('active', theme === 'dark');
        localStorage.setItem('theme', theme);
    };

    const setGameMode = (mode) => {
        document.querySelector(`input[name="game-mode"][value="${mode}"]`).checked = true;
        localStorage.setItem('gameMode', mode);
    };

    const setCellSize = (width, height) => {
        const w = Number(width);
        const h = Number(height);
        document.documentElement.style.setProperty('--cell-width', `${w}px`);
        document.documentElement.style.setProperty('--cell-height', `${h}px`);
        cellWidthSlider.value = w;
        cellWidthValue.textContent = `${w}px`;
        cellHeightSlider.value = h;
        cellHeightValue.textContent = `${h}px`;
        localStorage.setItem('customCellWidth', w);
        localStorage.setItem('customCellHeight', h);
    };

    const createPeriodicTable = () => {
        elements.forEach(el => {
            const elDiv = document.createElement('div');
            elDiv.className = `element ${el.category}`;
            elDiv.style.gridRow = el.y;
            elDiv.style.gridColumn = el.x;
            elDiv.dataset.number = el.number;
            elDiv.innerHTML = `<div class="atomic-number">${el.number}</div><div class="symbol">${el.symbol}</div><div class="name">${el.name}</div>`;
            elDiv.addEventListener('click', () => {
                elDiv.classList.toggle('selected');
                lastSelectionMode = null;
            });
            periodicTable.appendChild(elDiv);
        });
    };

    const createLegend = () => {
        Object.entries(categories).forEach(([key, value]) => {
            if (!document.querySelector(`.legend-item .${key}`)) {
                const legendItem = document.createElement('div');
                legendItem.className = 'legend-item';
                legendItem.innerHTML = `<div class="legend-color-box ${key}"></div><span>${value}</span>`;
                legendContainer.appendChild(legendItem);
            }
        });
    };

    const prepareGame = () => {
        if (isCreatingGroup) return;
        const selectedDivs = document.querySelectorAll('.element.selected');
        if (selectedDivs.length === 0) {
            alert('กรุณาเลือกธาตุอย่างน้อย 1 ธาตุ!');
            return;
        }

        const commonSelectedData = Array.from(selectedDivs).map(div =>
            elements.find(el => el.number == div.dataset.number)
        );
        selectedElementsData = [...commonSelectedData];
        fillGameElements = [...commonSelectedData];

        if (lastSelectionMode === 'all') {
            currentGameModeKey = 'all_elements';
        } else if (lastSelectionMode === 'main') {
            currentGameModeKey = 'main_groups';
        } else if (lastSelectionMode && lastSelectionMode.startsWith('custom_')) {
            currentGameModeKey = lastSelectionMode.replace('custom_', '');
        } else {
            currentGameModeKey = null;
        }

        gameChoiceModal.classList.remove('hidden');
    };

    const startFlashcardGame = () => {
        if (randomOrderCheckbox.checked) {
            selectedElementsData.sort(() => Math.random() - 0.5);
        }
        currentCardIndex = 0;
        selectionScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');
        displayCard();
    };

    const displayCard = () => {
        if (currentCardIndex >= selectedElementsData.length) {
            cardFront.innerHTML = `<div class="card-front-symbol">🎉</div>`;
            cardBack.innerHTML = `<h2>จบเกมแล้ว!</h2><p>คุณทบทวนครบ ${selectedElementsData.length} ธาตุ</p>`;
            nextCardBtn.disabled = true;
            flipCardBtn.disabled = true;
            flashcard.classList.remove('flipped');
            return;
        }

        const currentElement = selectedElementsData[currentCardIndex];
        window.currentDisplayedElement = currentElement; // เพิ่มบรรทัดนี้
        flashcard.classList.remove('flipped');
        nextCardBtn.disabled = false;
        flipCardBtn.disabled = false;

        const gameMode = localStorage.getItem('gameMode') || 'symbol-to-name';
        const backContent = `<h2>${currentElement.name} (${currentElement.symbol})</h2><p><strong>เลขอะตอม:</strong> ${currentElement.number}</p><p><strong>มวลอะตอม:</strong> ${currentElement.mass.toFixed(3)}</p><p><strong>ประเภท:</strong> ${categories[currentElement.category]}</p>`;

        if (gameMode === 'name-to-symbol') {
            cardFront.innerHTML = `<div class="card-front-name">${currentElement.name}</div>`;
        } else {
            cardFront.innerHTML = `<div class="card-front-symbol">${currentElement.symbol}</div>`;
        }
        cardBack.innerHTML = backContent;
    };

    const backToSelectionFromFlashcard = () => {
        gameScreen.classList.add('hidden');
        selectionScreen.classList.remove('hidden');
    };

    const startFillTheBlanksGame = () => {
        selectionScreen.classList.add('hidden');
        fillGameScreen.classList.remove('hidden');
        placedElements = {};
        currentFillElementIndex = 0;
        checkAnswersBtn.disabled = false;
        elementBank.innerHTML = '';
        if (randomOrderCheckbox.checked) {
            fillGameElements.sort(() => Math.random() - 0.5);
        }
        createEmptyGrid();
        displayNextFillElement();
        startTimer();
    };

    const checkAnswers = () => {
        document.querySelectorAll('.placeholder-element').forEach(p => {
            p.classList.remove('correct-placement', 'incorrect-placement');
            p.removeAttribute('data-correct-symbol');
        });

        let allCorrect = true;
        document.querySelectorAll('.placeholder-element:has(.element)').forEach(placeholder => {
            const droppedElementNumber = placeholder.querySelector('.element').dataset.number;
            const correctElement = elements.find(el => el.number == droppedElementNumber);
            const placedX = parseInt(placeholder.dataset.x);
            const placedY = parseInt(placeholder.dataset.y);
            if (correctElement.x === placedX && correctElement.y === placedY) {
                placeholder.classList.add('correct-placement');
                const elementDiv = placeholder.querySelector('.element');
                if (elementDiv) {
                    elementDiv.classList.remove('placed');
                    elementDiv.classList.add(correctElement.category);
                }
            } else {
                allCorrect = false;
                placeholder.classList.add('incorrect-placement');
                const elementThatShouldBeHere = elements.find(el => el.x === placedX && el.y === placedY);
                placeholder.dataset.correctSymbol = elementThatShouldBeHere ? `ควรเป็น ${elementThatShouldBeHere.symbol}` : 'ช่องนี้ว่าง';
            }
        });

        if (Object.keys(placedElements).length < fillGameElements.length) {
            alert('คุณยังวางธาตุไม่ครบทุกตัว');
            document.querySelectorAll('.placeholder-element').forEach(p => {
                p.classList.remove('correct-placement', 'incorrect-placement');
                p.removeAttribute('data-correct-symbol');
                const elementDiv = p.querySelector('.element');
                if (elementDiv && !elementDiv.classList.contains('placed')) {
                    const categoryClass = Array.from(elementDiv.classList).find(c => categories[c]);
                    if(categoryClass) elementDiv.classList.remove(categoryClass);
                    elementDiv.classList.add('placed');
                }
            });
            return;
        }

        if (allCorrect) {
            const elapsedTime = stopTimer();
            let resultHTML = `<h2>เก่งมาก! ถูกต้องทั้งหมด! 🎉</h2>`;


            if (randomOrderCheckbox.checked) {
                resultHTML += `<p>ใช้เวลา: ${formatTime(elapsedTime)}</p>`;
                const user = auth.currentUser;
                if (user && currentGameModeKey) {
                    updateUserBestTime(user.uid, currentGameModeKey, elapsedTime);
                }
            } else {
                
                resultHTML += `<p>(โหมดไม่สุ่มลำดับ จะไม่มีการบันทึกสถิติเวลา)</p>`;
                console.log("Time not recorded: Shuffle mode was disabled.");
            }
            elementBank.innerHTML = resultHTML;

        } else {
            stopTimer();
            elementBank.innerHTML = '<h3>ผลลัพธ์: สีเขียวคือถูกต้อง, สีแดงคือผิด (พร้อมคำใบ้)</h3>';
        }
        checkAnswersBtn.disabled = true;
    };
    
    const backToSelectionFromFill = () => {
        if (gameTimerInterval) stopTimer();
        fillGameScreen.classList.add('hidden');
        selectionScreen.classList.remove('hidden');
    };

    const placeElementInGrid = (elementNumber, targetPlaceholder, source, originPlaceholder = null) => {
        const droppedElementData = elements.find(el => el.number == elementNumber);
        if (!droppedElementData) return;

        const droppedElementDiv = document.createElement('div');
        droppedElementDiv.className = 'element placed';
        droppedElementDiv.dataset.number = droppedElementData.number;
        droppedElementDiv.innerHTML = `<div class="symbol">${droppedElementData.symbol}</div>`;

        makeElementInGridDraggable(droppedElementDiv);
        targetPlaceholder.innerHTML = '';
        targetPlaceholder.appendChild(droppedElementDiv);

        if (source === 'grid' && originPlaceholder) {
            originPlaceholder.innerHTML = '';
            delete placedElements[`${originPlaceholder.dataset.x}-${originPlaceholder.dataset.y}`];
        }

        placedElements[`${targetPlaceholder.dataset.x}-${targetPlaceholder.dataset.y}`] = droppedElementData.number;

        if (source === 'bank') {
            currentFillElementIndex++;
            displayNextFillElement();
        }
    };

    const makeElementInGridDraggable = (elementDiv) => {
        elementDiv.draggable = true;
        elementDiv.addEventListener('dragstart', (e) => {
            e.stopPropagation();
            elementDiv.classList.add('dragging'); 
            const parentPlaceholder = elementDiv.parentElement;
            e.dataTransfer.setData('text/plain', elementDiv.dataset.number);
            e.dataTransfer.setData('source', 'grid');
            e.dataTransfer.setData('origin-x', parentPlaceholder.dataset.x);
            e.dataTransfer.setData('origin-y', parentPlaceholder.dataset.y);
        });

        elementDiv.addEventListener('dragend', () => {
            elementDiv.classList.remove('dragging');
        });

        elementDiv.addEventListener('touchstart', (e) => {
            handleTouchStart(e, 'grid');
        }, { passive: false });
    };

    const createEmptyGrid = () => {
        fillPeriodicTable.innerHTML = '';
        for (let y = 1; y <= 10; y++) {
            for (let x = 1; x <= 18; x++) {
                if (elements.some(el => el.x === x && el.y === y)) {
                    const placeholder = document.createElement('div');
                    placeholder.className = 'placeholder-element';
                    placeholder.dataset.x = x;
                    placeholder.dataset.y = y;
                    placeholder.style.gridColumn = x;
                    placeholder.style.gridRow = y;
                    placeholder.addEventListener('dragover', e => {
                        e.preventDefault();
                        placeholder.classList.add('drag-over');
                    });
                    placeholder.addEventListener('dragleave', () => placeholder.classList.remove('drag-over'));
                    placeholder.addEventListener('drop', handleMouseDrop);
                    fillPeriodicTable.appendChild(placeholder);
                }
            }
        }
    };

    const displayNextFillElement = () => {
        elementBank.innerHTML = '';
        if (currentFillElementIndex >= fillGameElements.length) {
            elementBank.innerHTML = '<p>วางธาตุทั้งหมดแล้ว! กด "ตรวจคำตอบ" ได้เลย</p>';
            return;
        }
        const elementToPlace = fillGameElements[currentFillElementIndex];
        const draggableDiv = document.createElement('div');
        draggableDiv.className = `draggable-element element ${elementToPlace.category}`;
        draggableDiv.draggable = true;
        draggableDiv.dataset.number = elementToPlace.number;
        draggableDiv.innerHTML = `<div class="symbol">${elementToPlace.symbol}</div><div class="name">${elementToPlace.name}</div>`;

        draggableDiv.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', elementToPlace.number);
            e.dataTransfer.setData('source', 'bank');
        });

        draggableDiv.addEventListener('touchstart', (e) => {
            handleTouchStart(e, 'bank');
        }, { passive: false });

        elementBank.appendChild(draggableDiv);
    };

    const handleMouseDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const targetPlaceholder = e.currentTarget;
        targetPlaceholder.classList.remove('drag-over');

        const source = e.dataTransfer.getData('source');
        if (targetPlaceholder.childElementCount > 0) return;

        const elementNumber = e.dataTransfer.getData('text/plain');
        let originPlaceholder = null;
        if (source === 'grid') {
            const originX = e.dataTransfer.getData('origin-x');
            const originY = e.dataTransfer.getData('origin-y');
            originPlaceholder = document.querySelector(`.placeholder-element[data-x='${originX}'][data-y='${originY}']`);
        }

        placeElementInGrid(elementNumber, targetPlaceholder, source, originPlaceholder);
    };

    const handleTouchStart = (e, source) => {
        e.preventDefault();
        const originalElement = e.currentTarget;
        touchState.originalElement = originalElement;
        touchState.source = source;

        if (source === 'grid') {
            touchState.originPlaceholder = originalElement.parentElement;
        }

        const clone = originalElement.cloneNode(true);
        clone.style.setProperty('background-color', '#cccccc', 'important');
        clone.style.setProperty('color', '#333', 'important');
        clone.style.opacity = '0.7';
        clone.style.position = 'absolute';
        clone.style.zIndex = '1000';
        clone.style.pointerEvents = 'none';
        clone.style.width = `${originalElement.offsetWidth}px`;
        clone.style.height = `${originalElement.offsetHeight}px`;
        document.body.appendChild(clone);
        touchState.draggedElement = clone;

        const touch = e.touches[0];
        clone.style.left = `${touch.clientX - clone.offsetWidth / 2}px`;
        clone.style.top = `${touch.clientY - clone.offsetHeight / 2}px`;

        touchState.isDragging = true;
    };
    
    const handleTouchMove = (e) => {
        if (!touchState.isDragging || !touchState.draggedElement) return;
        e.preventDefault();

        const touch = e.touches[0];
        touchState.draggedElement.style.left = `${touch.clientX - touchState.draggedElement.offsetWidth / 2}px`;
        touchState.draggedElement.style.top = `${touch.clientY - touchState.draggedElement.offsetHeight / 2}px`;

        touchState.draggedElement.style.display = 'none';
        const elementUnder = document.elementFromPoint(touch.clientX, touch.clientY);
        touchState.draggedElement.style.display = '';

        document.querySelectorAll('.placeholder-element.drag-over').forEach(p => p.classList.remove('drag-over'));
        if (elementUnder && elementUnder.classList.contains('placeholder-element')) {
            elementUnder.classList.add('drag-over');
        }
    };

    const handleTouchEnd = (e) => {
        if (!touchState.isDragging || !touchState.draggedElement) return;

        const touch = e.changedTouches[0];
        touchState.draggedElement.style.display = 'none';
        const elementUnder = document.elementFromPoint(touch.clientX, touch.clientY);
        touchState.draggedElement.style.display = '';

        const targetPlaceholder = elementUnder ? elementUnder.closest('.placeholder-element') : null;

        if (targetPlaceholder && targetPlaceholder.childElementCount === 0) {
            const elementNumber = touchState.originalElement.dataset.number;
            placeElementInGrid(elementNumber, targetPlaceholder, touchState.source, touchState.originPlaceholder);
        }

        document.querySelectorAll('.placeholder-element.drag-over').forEach(p => p.classList.remove('drag-over'));
        document.body.removeChild(touchState.draggedElement);
        touchState = { isDragging: false, draggedElement: null, originalElement: null, source: null, originPlaceholder: null };
    };

    const STORAGE_KEY = 'customElementGroups';
    const getCustomGroups = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const saveCustomGroups = (groups) => localStorage.setItem(STORAGE_KEY, JSON.stringify(groups));

    const populateCustomGroupsModal = () => {
        const groups = getCustomGroups();
        customGroupsList.innerHTML = '';
        if (groups.length === 0) {
            customGroupsList.innerHTML = '<li>ยังไม่มีกลุ่มที่บันทึกไว้</li>';
            return;
        }
        groups.forEach(group => {
            const li = document.createElement('li');
            const bestTime = userBestTimes[group.name];
            li.innerHTML = `
                <div class="group-info">
                    <span class="group-name">${group.name}</span>
                    <span class="best-time">Best: ${formatTime(bestTime)}</span>
                </div>
                <div class="group-actions">
                    <button class="use-group-btn" data-group-name="${group.name}">ใช้กลุ่มนี้</button>
                    <button class="delete-group-btn" data-group-name="${group.name}">ลบ</button>
                </div>
            `;
            customGroupsList.appendChild(li);
        });
    };

    const enterGroupCreationMode = () => {
        isCreatingGroup = true;
        customGroupsModal.classList.add('hidden');
        saveGroupModal.classList.add('hidden');
        document.querySelectorAll('.element.selected').forEach(el => el.classList.remove('selected'));
        startGameBtn.textContent = 'บันทึกกลุ่มที่เลือก';
        alert('กรุณาเลือกธาตุที่ต้องการสำหรับกลุ่มใหม่ จากนั้นกดปุ่ม "บันทึกกลุ่มที่เลือก"');
    };

    const exitGroupCreationMode = () => {
        isCreatingGroup = false;
        startGameBtn.textContent = '▶️ เริ่มเกม';
    };

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log("Signed in successfully!", result.user);
                sidebar.classList.add('hidden');
            }).catch((error) => {
                console.error("Authentication failed:", error);
            });
    };

    const signOutUser = () => {
        signOut(auth).then(() => {
            console.log("Signed out successfully!");
        }).catch((error) => {
            console.error("Sign out failed:", error);
        });
    };

    const handleProfileUpdate = async () => {
        const user = auth.currentUser;
        const newName = newUsernameInput.value.trim();
        profileUpdateFeedback.textContent = '';
        profileUpdateFeedback.className = '';

        if (!user) {
            profileUpdateFeedback.textContent = 'ไม่พบข้อมูลผู้ใช้';
            profileUpdateFeedback.classList.add('error');
            return;
        }
        if (!newName) {
            profileUpdateFeedback.textContent = 'กรุณากรอกชื่อใหม่';
            profileUpdateFeedback.classList.add('error');
            return;
        }

        try {
            await updateProfile(user, { displayName: newName });
  await applyUsernameToLeaderboard(newName);
            usernameDisplay.textContent = newName;
            profileUpdateFeedback.textContent = 'อัปเดตโปรไฟล์สำเร็จ!';
            profileUpdateFeedback.classList.add('success');
            setTimeout(() => {
                editProfileModal.classList.add('hidden');
            }, 1500);
        } catch (error) {
            console.error("Profile update failed:", error);
            profileUpdateFeedback.textContent = 'เกิดข้อผิดพลาด: ' + error.message;
            profileUpdateFeedback.classList.add('error');
        }
    };

    cellWidthSlider.addEventListener('input', (e) => setCellSize(e.target.value, cellHeightSlider.value));
    cellHeightSlider.addEventListener('input', (e) => setCellSize(cellWidthSlider.value, e.target.value));
    resetSizeBtn.addEventListener('click', () => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const defaultSize = isMobile ? MOBILE_DEFAULT_CELL_SIZE : DESKTOP_DEFAULT_CELL_SIZE;
        setCellSize(defaultSize, defaultSize);
        localStorage.removeItem('customCellWidth');
        localStorage.removeItem('customCellHeight');
    });
    
    settingsBtn.addEventListener('click', () => settingsModal.classList.remove('hidden'));
    closeModalBtn.addEventListener('click', () => settingsModal.classList.add('hidden'));
    settingsModal.addEventListener('click', (e) => { if (e.target === settingsModal) settingsModal.classList.add('hidden'); });
    lightModeBtn.addEventListener('click', () => setTheme('light'));
    darkModeBtn.addEventListener('click', () => setTheme('dark'));
    gameModeRadios.forEach(radio => radio.addEventListener('change', (e) => setGameMode(e.target.value)));

    selectAllBtn.addEventListener('click', () => {
        document.querySelectorAll('.element').forEach(el => el.classList.add('selected'));
        lastSelectionMode = 'all';
    });
    deselectAllBtn.addEventListener('click', () => {
        document.querySelectorAll('.element').forEach(el => el.classList.remove('selected'));
        lastSelectionMode = null;
    });
    selectMainGroupsBtn.addEventListener('click', () => {
        document.querySelectorAll('.element.selected').forEach(el => el.classList.remove('selected'));
        document.querySelectorAll('.element').forEach(el => {
            const col = parseInt(el.style.gridColumn);
            if (col === 1 || col === 2 || (col >= 13 && col <= 18) && (parseInt(el.style.gridRow)<8)) {
                el.classList.add('selected');
            }
        });
        lastSelectionMode = 'main';
    });
    
    customGroupsBtn.addEventListener('click', () => {
        if (isCreatingGroup) {
            exitGroupCreationMode();
            alert('ยกเลิกการสร้างกลุ่มแล้ว');
            return;
        }
        populateCustomGroupsModal();
        customGroupsModal.classList.remove('hidden');
    });

    createNewGroupBtn.addEventListener('click', enterGroupCreationMode);

    startGameBtn.addEventListener('click', (e) => {
        if (isCreatingGroup) {
            e.stopImmediatePropagation();
            const selectedDivs = document.querySelectorAll('.element.selected');
            if (selectedDivs.length === 0) {
                alert('กรุณาเลือกธาตุอย่างน้อย 1 ธาตุเพื่อสร้างกลุ่ม');
                return;
            }
            newGroupNameInput.value = '';
            saveGroupModal.classList.remove('hidden');
        } else {
            prepareGame();
        }
    }, true);

    saveNewGroupBtn.addEventListener('click', () => {
        const groupName = newGroupNameInput.value.trim();
        if (!groupName) {
            alert('กรุณาตั้งชื่อกลุ่ม');
            return;
        }
        const selectedElements = Array.from(document.querySelectorAll('.element.selected')).map(el => parseInt(el.dataset.number));
        const newGroup = { name: groupName, elements: selectedElements };
        const groups = getCustomGroups();
        groups.push(newGroup);
        saveCustomGroups(groups);
        alert(`บันทึกกลุ่ม "${groupName}" เรียบร้อยแล้ว!`);
        saveGroupModal.classList.add('hidden');
        exitGroupCreationMode();
    });

    customGroupsList.addEventListener('click', (e) => {
        const groupName = e.target.dataset.groupName;
        if (!groupName) return;

        if (e.target.classList.contains('use-group-btn')) {
            const groups = getCustomGroups();
            const groupToUse = groups.find(g => g.name === groupName);
            if (groupToUse) {
                document.querySelectorAll('.element.selected').forEach(el => el.classList.remove('selected'));
                groupToUse.elements.forEach(num => {
                    const elDiv = document.querySelector(`.element[data-number='${num}']`);
                    if (elDiv) elDiv.classList.add('selected');
                });
                customGroupsModal.classList.add('hidden');
                lastSelectionMode = `custom_${groupName}`;
            }
        } else if (e.target.classList.contains('delete-group-btn')) {
            if (confirm(`คุณแน่ใจหรือไม่ว่าต้องการลบกลุ่ม "${groupName}"?`)) {
                let groups = getCustomGroups();
                groups = groups.filter(g => g.name !== groupName);
                saveCustomGroups(groups);
                populateCustomGroupsModal();
            }
        }
    });

    closeCustomGroupsModalBtn.addEventListener('click', () => customGroupsModal.classList.add('hidden'));
    closeSaveGroupModalBtn.addEventListener('click', () => saveGroupModal.classList.add('hidden'));
    
    flipCardBtn.addEventListener('click', () => flashcard.classList.toggle('flipped'));
    nextCardBtn.addEventListener('click', () => {
        currentCardIndex++;
        displayCard();
    });
    backToSelectionBtn.addEventListener('click', backToSelectionFromFlashcard);
    
    closeChoiceModalBtn.addEventListener('click', () => gameChoiceModal.classList.add('hidden'));
    gameChoiceModal.addEventListener('click', (e) => { if (e.target === gameChoiceModal) gameChoiceModal.classList.add('hidden'); });
    startFlashcardGameBtn.addEventListener('click', () => {
        gameChoiceModal.classList.add('hidden');
        startFlashcardGame();
    });
    startFillGameBtn.addEventListener('click', () => {
        gameChoiceModal.classList.add('hidden');
        startFillTheBlanksGame();
    });
    
    checkAnswersBtn.addEventListener('click', checkAnswers);
    fillBackToSelectionBtn.addEventListener('click', backToSelectionFromFill);

    hamburgerBtn.addEventListener('click', () => sidebar.classList.remove('hidden'));
    closeSidebarBtn.addEventListener('click', () => sidebar.classList.add('hidden'));
    loginBtn.addEventListener('click', signInWithGoogle);
    logoutBtn.addEventListener('click', signOutUser);

    editProfileBtn.addEventListener('click', () => {
        const user = auth.currentUser;
        if (user) {
            newUsernameInput.value = user.displayName || '';
            profileUpdateFeedback.textContent = '';
            profileUpdateFeedback.className = '';
            editProfileModal.classList.remove('hidden');
        }
    });
    closeEditProfileModalBtn.addEventListener('click', () => editProfileModal.classList.add('hidden'));
    saveProfileBtn.addEventListener('click', handleProfileUpdate);
    
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    
    const initializeApp = () => {
        createPeriodicTable();
        createLegend();

        const savedTheme = localStorage.getItem('theme') || 'light';
        const savedGameMode = localStorage.getItem('gameMode') || 'symbol-to-name';

        let initialWidth = localStorage.getItem('customCellWidth');
        let initialHeight = localStorage.getItem('customCellHeight');

        if (!initialWidth || !initialHeight) {
            const isMobile = window.matchMedia("(max-width: 768px)").matches;
            const defaultSize = isMobile ? MOBILE_DEFAULT_CELL_SIZE : DESKTOP_DEFAULT_CELL_SIZE;
            initialWidth = defaultSize;
            initialHeight = defaultSize;
        }
        function initDynamicBackground() {
        const existing = document.getElementById('bg-particles');
        if (existing) return;
        const c = document.createElement('canvas');
        c.id = 'bg-particles';
        c.style.cssText = 'position:fixed;inset:0;z-index:-1;pointer-events:none;';
        document.body.appendChild(c);
        const ctx = c.getContext('2d');
        let w, h, raf;
        const particles = Array.from({ length: 60 }, () => ({
            x: Math.random(), y: Math.random(),
            vx: (Math.random() - 0.5) * 0.0007,
            vy: (Math.random() - 0.5) * 0.0007
        }));

        const resize = () => { w = c.width = innerWidth; h = c.height = innerHeight; };
        addEventListener('resize', resize); resize();

        function step() {
            ctx.clearRect(0, 0, w, h);
            ctx.globalAlpha = 0.8;
            particles.forEach(p => {
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0 || p.x > 1) p.vx *= -1;
                if (p.y < 0 || p.y > 1) p.vy *= -1;
            });
            // Draw links
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = (particles[i].x - particles[j].x) * w;
                    const dy = (particles[i].y - particles[j].y) * h;
                    const d2 = dx * dx + dy * dy;
                    if (d2 < 120 * 120) {
                        const a = 1 - (d2 ** 0.5) / 120;
                        ctx.strokeStyle = `rgba(255,212,59,${a * 0.35})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x * w, particles[i].y * h);
                        ctx.lineTo(particles[j].x * w, particles[j].y * h);
                        ctx.stroke();
                    }
                }
            }
            // Draw dots
            particles.forEach(p => {
                ctx.fillStyle = 'rgba(255,232,102,0.9)';
                ctx.beginPath();
                ctx.arc(p.x * w, p.y * h, 1.6, 0, Math.PI * 2);
                ctx.fill();
            });
            raf = requestAnimationFrame(step);
        }
        step();
    }

        //initDynamicBackground();
        

        setTheme(savedTheme);
        setGameMode(savedGameMode);
        setCellSize(initialWidth, initialHeight);

        onAuthStateChanged(auth, user => {
            if (user) {
                profileContainer.classList.remove('hidden');
                loginContainer.classList.add('hidden');
                usernameDisplay.textContent = user.displayName || 'User';
                profilePic.src = user.photoURL || 'https://via.placeholder.com/80';
                fetchUserBestTimes(user.uid);
            } else {
                profileContainer.classList.add('hidden');
                loginContainer.classList.remove('hidden');
                userBestTimes = {};
                updateBestTimesUI();
            }
        });
    };

    initializeApp();
});