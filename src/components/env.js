//import firebase from "https://www.gstatic.com/firebasejs/7.23.0/firebase-firestore.js";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBqXZZ1vT2YmUSfSrRUoJWLOMGffpvKNkk",
  authDomain: "projetodashboard-12d3f.firebaseapp.com",
  projectId: "projetodashboard-12d3f",
  storageBucket: "projetodashboard-12d3f.appspot.com",
  messagingSenderId: "845497449788",
  appId: "1:845497449788:web:10c22b08db3e221b2cf239",
  measurementId: "G-LQZP1B9M0G"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
