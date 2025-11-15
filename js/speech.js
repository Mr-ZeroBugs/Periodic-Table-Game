/* speech.js - Text-to-Speech Integration for Periodic Table */

(() => {
    // Speech System Configuration
    const speechConfig = {
        enabled: false,
        language: 'th-TH', // 'th-TH' or 'en-US'
        rate: 0.9,
        pitch: 1.0,
        volume: 1.0
    };

    const STORAGE_KEY = 'speechSettings';

    // English names mapping (add to elements data)
    const englishNames = {
        'H': 'Hydrogen', 'He': 'Helium', 'Li': 'Lithium', 'Be': 'Beryllium',
        'B': 'Boron', 'C': 'Carbon', 'N': 'Nitrogen', 'O': 'Oxygen',
        'F': 'Fluorine', 'Ne': 'Neon', 'Na': 'Sodium', 'Mg': 'Magnesium',
        'Al': 'Aluminum', 'Si': 'Silicon', 'P': 'Phosphorus', 'S': 'Sulfur',
        'Cl': 'Chlorine', 'Ar': 'Argon', 'K': 'Potassium', 'Ca': 'Calcium',
        'Sc': 'Scandium', 'Ti': 'Titanium', 'V': 'Vanadium', 'Cr': 'Chromium',
        'Mn': 'Manganese', 'Fe': 'Iron', 'Co': 'Cobalt', 'Ni': 'Nickel',
        'Cu': 'Copper', 'Zn': 'Zinc', 'Ga': 'Gallium', 'Ge': 'Germanium',
        'As': 'Arsenic', 'Se': 'Selenium', 'Br': 'Bromine', 'Kr': 'Krypton',
        'Rb': 'Rubidium', 'Sr': 'Strontium', 'Y': 'Yttrium', 'Zr': 'Zirconium',
        'Nb': 'Niobium', 'Mo': 'Molybdenum', 'Tc': 'Technetium', 'Ru': 'Ruthenium',
        'Rh': 'Rhodium', 'Pd': 'Palladium', 'Ag': 'Silver', 'Cd': 'Cadmium',
        'In': 'Indium', 'Sn': 'Tin', 'Sb': 'Antimony', 'Te': 'Tellurium',
        'I': 'Iodine', 'Xe': 'Xenon', 'Cs': 'Cesium', 'Ba': 'Barium',
        'La': 'Lanthanum', 'Ce': 'Cerium', 'Pr': 'Praseodymium', 'Nd': 'Neodymium',
        'Pm': 'Promethium', 'Sm': 'Samarium', 'Eu': 'Europium', 'Gd': 'Gadolinium',
        'Tb': 'Terbium', 'Dy': 'Dysprosium', 'Ho': 'Holmium', 'Er': 'Erbium',
        'Tm': 'Thulium', 'Yb': 'Ytterbium', 'Lu': 'Lutetium', 'Hf': 'Hafnium',
        'Ta': 'Tantalum', 'W': 'Tungsten', 'Re': 'Rhenium', 'Os': 'Osmium',
        'Ir': 'Iridium', 'Pt': 'Platinum', 'Au': 'Gold', 'Hg': 'Mercury',
        'Tl': 'Thallium', 'Pb': 'Lead', 'Bi': 'Bismuth', 'Po': 'Polonium',
        'At': 'Astatine', 'Rn': 'Radon', 'Fr': 'Francium', 'Ra': 'Radium',
        'Ac': 'Actinium', 'Th': 'Thorium', 'Pa': 'Protactinium', 'U': 'Uranium',
        'Np': 'Neptunium', 'Pu': 'Plutonium', 'Am': 'Americium', 'Cm': 'Curium',
        'Bk': 'Berkelium', 'Cf': 'Californium', 'Es': 'Einsteinium', 'Fm': 'Fermium',
        'Md': 'Mendelevium', 'No': 'Nobelium', 'Lr': 'Lawrencium', 'Rf': 'Rutherfordium',
        'Db': 'Dubnium', 'Sg': 'Seaborgium', 'Bh': 'Bohrium', 'Hs': 'Hassium',
        'Mt': 'Meitnerium', 'Ds': 'Darmstadtium', 'Rg': 'Roentgenium', 'Cn': 'Copernicium',
        'Nh': 'Nihonium', 'Fl': 'Flerovium', 'Mc': 'Moscovium', 'Lv': 'Livermorium',
        'Ts': 'Tennessine', 'Og': 'Oganesson'
    };

    // Load settings from localStorage
    const loadSpeechSettings = () => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const settings = JSON.parse(saved);
                Object.assign(speechConfig, settings);
            } catch (e) {
                console.warn('Failed to load speech settings');
            }
        }
    };

    // Save settings to localStorage
    const saveSpeechSettings = () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(speechConfig));
    };

    // Check if speech synthesis is available
    const isSpeechAvailable = () => {
        return 'speechSynthesis' in window;
    };

    // Speak element name
    const speakElement = (elementData) => {
        if (!speechConfig.enabled || !isSpeechAvailable()) return;

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance();
        
        // Choose text based on language
        if (speechConfig.language === 'th-TH') {
            utterance.text = elementData.name;
            utterance.lang = 'th-TH';
        } else {
            // For English, use the symbol pronunciation or English name if available
            // You might want to add English names to your elements data
            utterance.text = englishNames[elementData.symbol]
            utterance.lang = 'en-US';
        }

        utterance.rate = speechConfig.rate;
        utterance.pitch = speechConfig.pitch;
        utterance.volume = speechConfig.volume;

        window.speechSynthesis.speak(utterance);
    };

    // Toggle speech system
    const toggleSpeech = (enabled) => {
        speechConfig.enabled = enabled;
        saveSpeechSettings();
    };

    // Change language
    const changeSpeechLanguage = (language) => {
        speechConfig.language = language;
        saveSpeechSettings();
    };

    // Update speech rate
    const updateSpeechRate = (rate) => {
        speechConfig.rate = Math.max(0.1, Math.min(2.0, rate));
        saveSpeechSettings();
    };

    // Initialize speech system
    const initSpeechSystem = () => {
        loadSpeechSettings();

        if (!isSpeechAvailable()) {
            console.warn('Speech synthesis not available in this browser');
            return false;
        }

        return true;
    };

    // Create UI controls in settings modal
    const createSpeechControls = () => {
        const settingsBody = document.querySelector('#settings-modal .modal-body');
        if (!settingsBody) return;

        // Check if controls already exist
        if (document.getElementById('speech-controls')) return;

        const speechControlsHTML = `
            <div class="setting-item" id="speech-controls">
                <span>ระบบเสียงอ่านชื่อธาตุ</span>
                <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 10px;">
                    <label style="display: flex; align-items: center; gap: 8px;">
                        <input type="checkbox" id="speech-enable-checkbox">
                        <span>เปิดใช้งานเสียงอ่าน</span>
                    </label>
                    
                    <div id="speech-options" style="display: none; margin-left: 20px; gap: 10px; flex-direction: column;">
                        <div>
                            <label style="display: block; margin-bottom: 5px;">ภาษา:</label>
                            <select id="speech-language-select" style="padding: 5px; border-radius: 4px; border: 1px solid #ccc;">

                                <option value="en-US">อังกฤษ (English)</option>
                            </select>
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 5px;">ความเร็ว: <span id="speech-rate-value">0.9x</span></label>
                            <input type="range" id="speech-rate-slider" min="0.5" max="2.0" step="0.1" value="0.9" style="width: 100%;">
                        </div>

                        <button id="test-speech-btn" style="padding: 8px; border-radius: 4px; background: #4CAF50; color: white; border: none; cursor: pointer;">
                            ทดสอบเสียง
                        </button>
                    </div>
                </div>
            </div>
        `;

        settingsBody.insertAdjacentHTML('beforeend', speechControlsHTML);

        // Setup event listeners
        const enableCheckbox = document.getElementById('speech-enable-checkbox');
        const languageSelect = document.getElementById('speech-language-select');
        const rateSlider = document.getElementById('speech-rate-slider');
        const rateValue = document.getElementById('speech-rate-value');
        const testBtn = document.getElementById('test-speech-btn');
        const optionsDiv = document.getElementById('speech-options');

        // Initialize UI state
        enableCheckbox.checked = speechConfig.enabled;
        languageSelect.value = speechConfig.language;
        rateSlider.value = speechConfig.rate;
        rateValue.textContent = `${speechConfig.rate.toFixed(1)}x`;
        optionsDiv.style.display = speechConfig.enabled ? 'flex' : 'none';

        // Event: Enable/Disable
        enableCheckbox.addEventListener('change', (e) => {
            toggleSpeech(e.target.checked);
            optionsDiv.style.display = e.target.checked ? 'flex' : 'none';
        });

        // Event: Language change
        languageSelect.addEventListener('change', (e) => {
            changeSpeechLanguage(e.target.value);
        });

        // Event: Rate change
        rateSlider.addEventListener('input', (e) => {
            const rate = parseFloat(e.target.value);
            updateSpeechRate(rate);
            rateValue.textContent = `${rate.toFixed(1)}x`;
        });

        // Event: Test button
        testBtn.addEventListener('click', () => {
            const testElement = {
                name: 'ไฮโดรเจน',
                symbol: 'Hydrogen'
            };
            speakElement(testElement);
        });
    };

    // Attach click handlers to elements
    const attachSpeechToElements = () => {
        // Wait for elements to be created
        const checkElements = setInterval(() => {
            const elements = document.querySelectorAll('.element[data-number]');
            if (elements.length > 0) {
                clearInterval(checkElements);
                
                elements.forEach(elementDiv => {
                    elementDiv.addEventListener('click', () => {
                        if (!speechConfig.enabled) return;
                        
                        const elementNumber = parseInt(elementDiv.dataset.number);
                        // Get element data from global elements array
                        if (window.periodicElements) {
                            const elementData = window.periodicElements.find(el => el.number === elementNumber);
                            if (elementData) {
                                speakElement(elementData);
                            }
                        }
                    });
                });
            }
        }, 100);

        // Timeout after 5 seconds
        setTimeout(() => clearInterval(checkElements), 5000);
    };

    // Export global API
    window.speechSystem = {
        speak: speakElement,
        toggle: toggleSpeech,
        changeLanguage: changeSpeechLanguage,
        updateRate: updateSpeechRate,
        isAvailable: isSpeechAvailable,
        getConfig: () => ({ ...speechConfig })
    };

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            if (initSpeechSystem()) {
                createSpeechControls();
                attachSpeechToElements();
            }
        });
    } else {
        if (initSpeechSystem()) {
            createSpeechControls();
            attachSpeechToElements();
        }
    }
})();