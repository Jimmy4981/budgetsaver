// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBteffHPQmgc7D7ksboNcREq66HPESerOs",
    authDomain: "budgetapp-e249a.firebaseapp.com",
    projectId: "budgetapp-e249a",
    storageBucket: "budgetapp-e249a.appspot.com",
    messagingSenderId: "141764724343",
    appId: "your-app-id"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');

    // Toggle navigation menu visibility
    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('visible');
    });

    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            try {
                await auth.signInWithEmailAndPassword(email, password);
                console.log('User logged in');
            } catch (error) {
                console.error('Error logging in user:', error);
            }
        });
    }

    if (document.getElementById('registerForm')) {
        document.getElementById('registerForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            try {
                await auth.createUserWithEmailAndPassword(email, password);
                console.log('User registered');
            } catch (error) {
                console.error('Error registering user:', error);
            }
        });
    }
});
