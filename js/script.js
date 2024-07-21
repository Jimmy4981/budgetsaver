// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBteffHPQmgc7D7ksboNcREq66HPESerOs",
  authDomain: "budgetapp-e249a.firebaseapp.com",
  projectId: "budgetapp-e249a",
  storageBucket: "budgetapp-e249a.appspot.com",
  messagingSenderId: "141764724343",
  appId: "1:141764724343:web:0ee200a8b24cb030b1a872",
  measurementId: "G-2VN3KGC3TX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



document.addEventListener('DOMContentLoaded', () => {
    // Check authentication state
    auth.onAuthStateChanged(user => {
        const isLoggedInPage = window.location.pathname === '/login.html' || window.location.pathname === '/register.html';
        
        if (user) {
            console.log('User is logged in:', user.email);

            // Redirect to dashboard or any other authenticated-only page if on login or register pages
            if (isLoggedInPage) {
                window.location.href = '/dashboard.html';
            }
        } else {
            console.log('No user is logged in');

            // Redirect to login if trying to access protected pages
            if (!isLoggedInPage) {
                window.location.href = '/login.html';
            }
        }
    });

    // Login form submission
    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            try {
                await auth.signInWithEmailAndPassword(email, password);
                console.log('User logged in');
                window.location.href = '/dashboard.html'; // Redirect to dashboard after successful login
            } catch (error) {
                console.error('Error logging in user:', error.message);
                alert('Login failed: ' + error.message);
            }
        });
    }

    // Registration form submission
    if (document.getElementById('registerForm')) {
        document.getElementById('registerForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            try {
                await auth.createUserWithEmailAndPassword(email, password);
                console.log('User registered');
                window.location.href = '/dashboard.html'; // Redirect to dashboard after successful registration
            } catch (error) {
                console.error('Error registering user:', error.message);
                alert('Registration failed: ' + error.message);
            }
        });
    }

    // Hamburger menu functionality
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');

    if (hamburgerMenu && navMenu) {
        hamburgerMenu.addEventListener('click', () => {
            navMenu.classList.toggle('visible');
        });
    }
});
