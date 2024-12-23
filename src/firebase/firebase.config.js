// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnFGJjH0uFABn4kPldf8Z7Q7LMd8juusg",
  authDomain: "service-sharing-97998.firebaseapp.com",
  projectId: "service-sharing-97998",
  storageBucket: "service-sharing-97998.firebasestorage.app",
  messagingSenderId: "884590234170",
  appId: "1:884590234170:web:d1f20822c3cd8de0718303",
  measurementId: "G-JDMSKEVK0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);