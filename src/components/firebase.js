import {getFirestore} from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM41XbCUlW7i82aoDtO5S7ZZIQcnktfjc",
  authDomain: "infocoins-b00b5.firebaseapp.com",
  projectId: "infocoins-b00b5",
  storageBucket: "infocoins-b00b5.appspot.com",
  messagingSenderId: "263974939596",
  appId: "1:263974939596:web:ab15be8d6b105e69594b69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
