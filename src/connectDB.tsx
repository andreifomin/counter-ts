// Import the functions you need from the SDKs you need
// import * as dotenv from "dotenv";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// dotenv.config();

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGING_SENDER_ID,
  // appId: process.env.API_ID
  apiKey: "AIzaSyC5PMy8s4rfRMhaNi8erY33BoaVxrSjG1c",
  authDomain: "counter-ts.firebaseapp.com",
  projectId: "counter-ts",
  storageBucket: "counter-ts.appspot.com",
  messagingSenderId: "815373009899",
  appId: "1:815373009899:web:e8b877a04c574e72664fae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;