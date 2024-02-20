// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "lets-talk-a9b9e.firebaseapp.com",
  projectId: "lets-talk-a9b9e",
  storageBucket: "lets-talk-a9b9e.appspot.com",
  messagingSenderId: "384762389976",
  appId: "1:384762389976:web:f3f36d6610d06138573ead"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);