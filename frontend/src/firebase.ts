// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_FIREBASE_API_KEY);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-app-901bd.firebaseapp.com",
  projectId: "mern-blog-app-901bd",
  storageBucket: "mern-blog-app-901bd.appspot.com",
  messagingSenderId: "854657786987",
  appId: "1:854657786987:web:a0bd470b745f50e5173d2e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
