import { getFirestore } from "firebase/firestore"

import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyBNFo5IuYJScmR-gYJrLQPUayqPNb8Joak",
  authDomain: "infocoins2.firebaseapp.com",
  projectId: "infocoins2",
  storageBucket: "infocoins2.appspot.com",
  messagingSenderId: "486483122137",
  appId: "1:486483122137:web:7b462c816b4e5416142bc8",
  measurementId: "G-FQ86C1LQKP"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

