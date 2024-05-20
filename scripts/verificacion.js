import app from "./firebase-config.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

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
        console.error('Error: ', error);
        alert('Error: ' + error.message);
    }
});
