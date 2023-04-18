// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKBr9aaU7EKcBN76cP-LqE2GQ9iKm9E2A",
  authDomain: "starup-moebel-design.firebaseapp.com",
  projectId: "starup-moebel-design",
  storageBucket: "starup-moebel-design.appspot.com",
  messagingSenderId: "622586509177",
  appId: "1:622586509177:web:b529f65e7fabee899921a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);