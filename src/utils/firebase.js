// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRyo_ftRGayuVWMiXuF0Er5SSqfTZGBKw",
  authDomain: "netflixgpt-fddf0.firebaseapp.com",
  projectId: "netflixgpt-fddf0",
  storageBucket: "netflixgpt-fddf0.appspot.com",
  messagingSenderId: "129033685324",
  appId: "1:129033685324:web:b29ef7d4611423e17427e9",
  measurementId: "G-TQZ7R14MGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();