// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfn5nEe0UvemnvaSa9E_OEbGMhOOd9rb4",
    authDomain: "retink-task.firebaseapp.com",
    projectId: "retink-task",
    storageBucket: "retink-task.appspot.com",
    messagingSenderId: "934027911884",
    appId: "1:934027911884:web:8032c7d1a74870dcc05869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;