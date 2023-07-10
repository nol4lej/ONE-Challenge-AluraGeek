// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAt0vmTDgPLiZZlk1c4xflUsdZb6S0HlHU",
    authDomain: "one-challenge-alurageek.firebaseapp.com",
    projectId: "one-challenge-alurageek",
    storageBucket: "one-challenge-alurageek.appspot.com",
    messagingSenderId: "208151393386",
    appId: "1:208151393386:web:98c555093b311372c00613",
    measurementId: "G-BRQ6C101YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

// Initialize Firestore 
export const db = getFirestore(app)