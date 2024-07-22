// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
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
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Tab switching functionality
document.addEventListener('DOMContentLoaded', () => {
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginTab.addEventListener('click', () => {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
    });

    registerTab.addEventListener('click', () => {
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
    });

    // Check authentication state
    onAuthStateChanged(auth, user => {
        if (user) {
            console.log('User is logged in:', user.email);
            window.location.href = '/dashboard.html';
        }
    });

    // Login form submission
    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            try {
                await signInWithEmailAndPassword(auth, email, password);
                console.log('User logged in');
                window.location.href = '/dashboard.html';
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
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                console.log('User registered');
                window.location.href = '/dashboard.html';
            } catch (error) {
                console.error('Error registering user:', error.message);
                alert('Registration failed: ' + error.message);
            }
        });
    }

    // Google sign-in button
    if (document.getElementById('googleSignIn')) {
        document.getElementById('googleSignIn').addEventListener('click', async () => {
            try {
                await signInWithPopup(auth, provider);
                console.log('User signed in with Google');
                window.location.href = '/dashboard.html';
            } catch (error) {
                console.error('Error signing in with Google:', error.message);
                alert('Google sign-in failed: ' + error.message);
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
