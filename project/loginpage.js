

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { browserLocalPersistence, browserSessionPersistence, setPersistence } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA9m77QBvEVC_NWYHTn0G1q7dLdql82WTs",
  authDomain: "freeott-780a3.firebaseapp.com",
  projectId: "freeott-780a3",
  storageBucket: "freeott-780a3.firebasestorage.app",
  messagingSenderId: "73605407408",
  appId: "1:73605407408:web:5dd1cf0ba336cd7f519175",
  measurementId: "G-RQ15FHRTFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const submit = document.getElementById('submit');

submit.addEventListener("click", function (event) {
  event.preventDefault()
  const email = document.getElementById('Email').value;
  const password = document.getElementById('password').value;
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  
    const user = userCredential.user;
    alert("Login Account.....");
    window.location.href="main.html";
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("password is incorrect or Email is not Register :"+errorMessage);
  });


})
document.getElementById('forgot').addEventListener("click", () => {
  const email = document.getElementById('Email').value;
  if (!email) {
    alert("Please enter your email address first.");
    return;
  }
  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("If this email is registered, you will receive a password reset email");
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});



