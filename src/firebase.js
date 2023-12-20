import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyD1fohYULEk7XssQiQVXMJmJh10XWfTHhQ",
    authDomain: "gif-pro.firebaseapp.com",
    projectId: "gif-pro",
    storageBucket: "gif-pro.appspot.com",
    messagingSenderId: "1068886509081",
    appId: "1:1068886509081:web:02cb058e7e0ba23c918c88",
    measurementId: "G-PWVLQTG403"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;