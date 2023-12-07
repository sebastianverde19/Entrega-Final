// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiYarkOuf0MFFn8FkeLp0Ens85zh_-0z4",
  authDomain: "eccomer-coderhouse.firebaseapp.com",
  projectId: "eccomer-coderhouse",
  storageBucket: "eccomer-coderhouse.appspot.com",
  messagingSenderId: "346365836638",
  appId: "1:346365836638:web:d15f74a7e506688dcb23cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);