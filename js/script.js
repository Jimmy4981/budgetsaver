// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBteffHPQmgc7D7ksboNcREq66HPESerOs",
    authDomain: "budgetapp-e249a.firebaseapp.com",
    projectId: "budgetapp-e249a",
    storageBucket: "budgetapp-e249a.appspot.com",
    messagingSenderId: "141764724343",
    appId: "your-app-id" // You need to add the appId here as well.
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// User Registration
const registerUser = async (email, password) => {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        console.log('User registered:', userCredential.user);
    } catch (error) {
        console.error('Error registering user:', error);
    }
};

// User Login
const loginUser = async (email, password) => {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        console.log('User logged in:', userCredential.user);
    } catch (error) {
        console.error('Error logging in user:', error);
    }
};

// Check if user is logged in
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('User is logged in:', user);
    } else {
        console.log('No user is logged in');
    }
});

// Firestore Example: Add Data
const addUserDocument = async (userId, data) => {
    try {
        await db.collection('users').doc(userId).set(data);
        console.log('User document added');
    } catch (error) {
        console.error('Error adding user document:', error);
    }
};

// Firestore Example: Get Data
const getUserDocument = async (userId) => {
    try {
        const userDoc = await db.collection('users').doc(userId).get();
        if (userDoc.exists) {
            console.log('User document data:', userDoc.data());
        } else {
            console.log('No such document!');
        }
    } catch (error) {
        console.error('Error getting user document:', error);
    }
};

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            await loginUser(email, password);
        });
    }

    if (document.getElementById('registerForm')) {
        document.getElementById('registerForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            await registerUser(email, password);
        });
    }
});
