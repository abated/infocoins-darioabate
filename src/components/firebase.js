import { getFirestore } from "firebase/firestore"

import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyBM41XbCUlW7i82aoDtO5S7ZZIQcnktfjc",
  authDomain: "infocoins-b00b5.firebaseapp.com",
  projectId: "infocoins-b00b5",
  storageBucket: "infocoins-b00b5.appspot.com",
  messagingSenderId: "263974939596",
  appId: "1:263974939596:web:ab15be8d6b105e69594b69"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
