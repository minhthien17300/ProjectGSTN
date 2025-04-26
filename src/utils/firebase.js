// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,  GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL0yVXORfQ2OdWvx7lbfNYnM5foVTuHiQ",
  authDomain: "projectgstn-8718c.firebaseapp.com",
  projectId: "projectgstn-8718c",
  storageBucket: "projectgstn-8718c.firebasestorage.app",
  messagingSenderId: "1013795297125",
  appId: "1:1013795297125:web:c9b34cc6e0e81eddba338c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, signInWithPopup };