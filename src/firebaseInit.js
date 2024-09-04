// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4uJKbs5hsxfj_Kw9_3Zhjgo3kT74vbg8",
  authDomain: "photo-app-8d7ed.firebaseapp.com",
  projectId: "photo-app-8d7ed",
  storageBucket: "photo-app-8d7ed.appspot.com",
  messagingSenderId: "93858107995",
  appId: "1:93858107995:web:af7c53e101bc89358da57e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
