// Firebase SDK se zaroori cheezein import karte hain
import { initializeApp } from "firebase/app"; // Firebase ko initialize karne ke liye
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Authentication aur Google sign-in ke liye


// Firebase configuration details (Console se milti hai)
const firebaseConfig = {
    apiKey: "AIzaSyAprcMknCR0LaV5YMkFoI2nBA9eQv98um4",
    authDomain: "auth-72c84.firebaseapp.com",
    projectId: "auth-72c84",
    storageBucket: "auth-72c84.firebasestorage.app",
    messagingSenderId: "1012970220485",
    appId: "1:1012970220485:web:7d4386af2074c04a73b9ac"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const googleprovider = new GoogleAuthProvider()
const gitProvider = new GithubAuthProvider()
const facebookPrtovider = new FacebookAuthProvider


export { auth, googleprovider, signInWithPopup, gitProvider, facebookPrtovider }