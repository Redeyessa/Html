
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
    import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
     import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

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
    const auth = getAuth(app);


    onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.href = "loginpage.html"; 
      }
    });

    document.getElementById("logout").addEventListener("click", () => {
      signOut(auth).then(() => {
        window.location.href = "loginpage.html";
      });
    });