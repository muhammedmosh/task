import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAbURzMdeO-6d2srBSiYXqZkvn8l9Z9G-U",
    authDomain: "planit-82761.firebaseapp.com",
    projectId: "planit-82761",
    storageBucket: "planit-82761.firebasestorage.app",
    messagingSenderId: "631213837702",
    appId: "1:631213837702:web:69096945b77502d1557007"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
