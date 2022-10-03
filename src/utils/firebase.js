import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// import "dotenv";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "aberration-co.firebaseapp.com",
    projectId: "aberration-co",
    storageBucket: "aberration-co.appspot.com",
    messagingSenderId: "870017547575",
    appId: "1:870017547575:web:e0336884e3ef55bdaeaeb2",
    measurementId: "G-75KC780ZLH"
};

// Use this to initialize the firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Use these for db & auth
const db = getFirestore(firebaseApp);

export default firebaseApp;
export { db };