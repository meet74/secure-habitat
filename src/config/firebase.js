// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,getReactNativePersistence, initializeAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const auth = getAuth(app)
export const firestore = getFirestore(app);