// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-qFrqQQtmm6nKoOQI0Ppd99t_o_xcA6Y",
  authDomain: "node-sql-ebb4d.firebaseapp.com",
  projectId: "node-sql-ebb4d",
  storageBucket: "node-sql-ebb4d.appspot.com",
  messagingSenderId: "926508543396",
  appId: "1:926508543396:web:1fbe34f55ee5a961d6e531",
  measurementId: "G-ETPFM389KB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
