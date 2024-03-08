// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuqrIaiFcgr1X9u68tB1J300TisCKEiec",
  authDomain: "habitat-9fd04.firebaseapp.com",
  projectId: "habitat-9fd04",
  storageBucket: "habitat-9fd04.appspot.com",
  messagingSenderId: "966088093330",
  appId: "1:966088093330:web:640d11556b02a3fb5a404b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const firestore = getFirestore(app);