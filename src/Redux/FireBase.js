// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuT2uIV8ZfW1VdpFo75v2z52OlCUR5a3A",
  authDomain: "rnw-student.firebaseapp.com",
  databaseURL: "https://rnw-student-default-rtdb.firebaseio.com",
  projectId: "rnw-student",
  storageBucket: "rnw-student.firebasestorage.app",
  messagingSenderId: "52849991972",
  appId: "1:52849991972:web:34889c65dafd4f0e4793b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
export { db, auth }