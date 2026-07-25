import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAed9McQJenhGasFEQ8VRk_P3YCAiYYLLA",
  authDomain: "stepx-694fa.firebaseapp.com",
  projectId: "stepx-694fa",
  storageBucket: "stepx-694fa.firebasestorage.app",
  messagingSenderId: "157698046224",
  appId: "1:157698046224:web:e9be82744db04d4095cd95",
  measurementId: "G-71P4XY0Y1K"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
