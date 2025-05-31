
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  const email = document.getElementById('Email').value;
  const password = document.getElementById('password').value;
  const submit = document.getElementById('submit').value;

  submit.addEventListener("click",function(event){
    event.preventDefault()
    alert(5)
  })
