// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBErt-sqn2UKxYxigmPE8d3hHVxilIKo_k",
    authDomain: "smart-shop-8e8bb.firebaseapp.com",
    projectId: "smart-shop-8e8bb",
    storageBucket: "smart-shop-8e8bb.appspot.com",
    messagingSenderId: "282097189073",
    appId: "1:282097189073:web:76258384ce4c1599f445f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;