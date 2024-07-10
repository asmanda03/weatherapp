// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//***************************************my add ons
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKC5lniAPTNT71Frv3nZm8wNhg6DjpDw4",
  authDomain: "weather-app-dc87e.firebaseapp.com",
  databaseURL: "https://weather-app-dc87e-default-rtdb.firebaseio.com",
  projectId: "weather-app-dc87e",
  storageBucket: "weather-app-dc87e.appspot.com",
  messagingSenderId: "311991355500",
  appId: "1:311991355500:web:9e9d3caa46b935f94f7049",
  measurementId: "G-JTQ9SD0QN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//*******************************************my add ons
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword };


