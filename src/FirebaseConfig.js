// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'; // ✅ import
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC54Bz_Bi0Do4Z3voBo89sWk0w9Yy_hww",
  authDomain: "portfolio-ea659.firebaseapp.com",
  projectId: "portfolio-ea659",
  storageBucket: "portfolio-ea659.firebasestorage.app",
  messagingSenderId: "452589802186",
  appId: "1:452589802186:web:a40c586743c7ab1e81da33",
  measurementId: "G-KGFX34R9H0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); 
export { app, database };
