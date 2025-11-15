// firebase_init.js (Firebase v10 modular from CDN, expose helpers on window.*)

import { initializeApp, getApps } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {
  getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import {
  getFirestore,
  doc, setDoc, getDoc, updateDoc, addDoc,
  collection, onSnapshot, query, orderBy, getDocs,
  serverTimestamp, Timestamp,
  // --- ส่วนที่แก้ไข: เพิ่ม deleteDoc เข้ามาใน import ---
  deleteDoc
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const cfg = {
  apiKey: 'AIzaSyCxsn_W3oVSM0glCeS7YpkWc-5q8LYShZQ',
  authDomain: 'periodic-table-database.firebaseapp.com',
  projectId: 'periodic-table-database',
  storageBucket: 'periodic-table-database.appspot.com',
  messagingSenderId: '958737094126',
  appId: '1:958737094126:web:285f72dad0ace35d70eaff',
  measurementId: 'G-MTNV70JMB4'
};

const app = getApps().length ? getApps()[0] : initializeApp(cfg);
const auth = getAuth(app);
const db = getFirestore(app);

window.whenAuthReady = new Promise(res => onAuthStateChanged(auth, u => res(u), e => res(null)) );

// Expose helpers for other scripts
window.firebaseDb = {
    db,
    doc, setDoc, getDoc, updateDoc, addDoc,
    collection, onSnapshot, query, orderBy, getDocs,
    serverTimestamp, Timestamp,
    // --- ส่วนที่แก้ไข: ส่งต่อ deleteDoc ไปให้ไฟล์อื่นใช้ ---
    deleteDoc
};
window.firebaseAuth = {
    auth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
};

document.dispatchEvent(new CustomEvent('firebase-ready'));