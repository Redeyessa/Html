import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyA9m77QBvEVC_NWYHTn0G1q7dLdql82WTs",
    authDomain: "freeott-780a3.firebaseapp.com",
    projectId: "freeott-780a3",
    storageBucket: "freeott-780a3.appspot.com",
    messagingSenderId: "73605407408",
    appId: "1:73605407408:web:5dd1cf0ba336cd7f519175",
    measurementId: "G-RQ15FHRTFG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


onAuthStateChanged(auth, (user) => {
    const Signin = document.getElementById("logout");
    if (!user) {
        Signin.innerHTML = "Sign in";
        
    }
});






window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("logout").addEventListener("click", () => {
        signOut(auth).then(() => {
            window.location.href = "loginpage.html";
        });
    });

    
});