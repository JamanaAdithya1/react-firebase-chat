// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyCtWoqWlRBiqGWNk-SfUppcg1wHyi0d43M",
  authDomain: "reactchatapp-9efb9.firebaseapp.com",
  projectId: "reactchatapp-9efb9",
  storageBucket: "reactchatapp-9efb9.appspot.com",
  messagingSenderId: "896817207348",
  appId: "1:896817207348:web:dd41c2f62ed825a7555261",
  measurementId: "G-NE8DF6YEY4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()