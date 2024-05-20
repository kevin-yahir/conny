import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJjVBVM-HGzT5cmPjjKlUHn9rEntnA3Za8",
    authDomain: "bdneveria.firebaseapp.com",
    projectId: "bdneveria",
    storageBucket: "bdneveria.appspot.com",
    messagingSenderId: "568870023009",
    appId: "1:568870023009:web:b92a47ce3533746de31f20",
    measurementId: "G-23EQWK7YR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("username", "==", username), where("password", "==", password));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
            window.location.href = 'exito.html';
        } else {
            alert('Datos erróneos. Por favor, intente de nuevo.');
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
});
