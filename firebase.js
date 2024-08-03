import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAeuzEkjqxyLo3OJXTZLpYjQ1z5hRMYXZ8",
    authDomain: "project-ifriends.firebaseapp.com",
    projectId: "project-ifriends",
    storageBucket: "project-ifriends.appspot.com",
    messagingSenderId: "85712558315",
    appId: "1:85712558315:web:7e4e36df92aaa5a87e86ae",
    measurementId: "G-72LX416Q5D"
};

// Initialize Firebase
let app;

if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
}

const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
