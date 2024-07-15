import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBxyaXyLG4Tywi_UqIJMIttRgeiDYElO_E",
  authDomain: "twitter-clone-7bc39.firebaseapp.com",
  projectId: "twitter-clone-7bc39",
  storageBucket: "twitter-clone-7bc39.appspot.com",
  messagingSenderId: "760407721554",
  appId: "1:760407721554:web:a69e8a37b0299ab132818b",
  measurementId: "G-ZQ0R7PT7FX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);