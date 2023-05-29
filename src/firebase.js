// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEHB2kYBE1qAGHwE4WpkPcJtYc-rGl-ig",
  authDomain: "starup-moebel-design-e97cd.firebaseapp.com",
  projectId: "starup-moebel-design-e97cd",
  storageBucket: "starup-moebel-design-e97cd.appspot.com",
  messagingSenderId: "803413664946",
  appId: "1:803413664946:web:0f1c0e5f0ae0a22d11d5ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage();
