// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIPYHT4-Xd-2UlVFBYRa2XbMw3axkgkvk",
  authDomain: "car-vally.firebaseapp.com",
  projectId: "car-vally",
  storageBucket: "car-vally.appspot.com",
  messagingSenderId: "327004047662",
  appId: "1:327004047662:web:d0b086baff906f14d492bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
