
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "unicommerci.firebaseapp.com",
  projectId: "unicommerci",
  storageBucket: "unicommerci.appspot.com",
  messagingSenderId: "700525065855",
  appId: "1:700525065855:web:ebc677e8026544d41df14a"
};


const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)