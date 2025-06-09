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


async function loadWelcomeText() {
    const docRef = doc(db, "massages", "welcomeText"); 
    const docSnap = await getDoc(docRef);
    

    const img1 = docSnap.data().img;
    document.getElementById("img1").src = img1;
   

    if (docSnap.exists()) {
        const message = docSnap.data().message;
        document.getElementById("displayText").textContent = message;
    } else {
        document.getElementById("displayText").textContent = "No message found";
    }
}




window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("logout").addEventListener("click", () => {
        signOut(auth).then(() => {
            window.location.href = "loginpage.html";
        });
    });

    loadWelcomeText(); 
});