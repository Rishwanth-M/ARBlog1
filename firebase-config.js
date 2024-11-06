// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";


const firebaseConfig = {
  apiKey: "AIzaSyDYvFdWoLL-YAObctYXBfkqwkUbLBXTsTk",
  authDomain: "arblog-a19f3.firebaseapp.com",
  projectId: "arblog-a19f3",
  storageBucket: "arblog-a19f3.appspot.com",
  messagingSenderId: "1001446483266",
  appId: "1:1001446483266:web:436692dd843096e5eed4db",
  measurementId: "G-4C40XF2L3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
export const storage = getStorage(app);