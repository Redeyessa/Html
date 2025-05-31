import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA9m77QBvEVC_NWYHTn0G1q7dLdql82WTs",
  authDomain: "freeott-780a3.firebaseapp.com",
  projectId: "freeott-780a3",
  storageBucket: "freeott-780a3.firebasestorage.app",
  messagingSenderId: "73605407408",
  appId: "1:73605407408:web:5dd1cf0ba336cd7f519175",
  measurementId: "G-RQ15FHRTFG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const submit = document.getElementById('submit');

submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById('Email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Logged in successfully!");
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});
