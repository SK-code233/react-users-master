// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhW4Ww4lKG1WF-vMJUT00k_t1gWfSZm48",
  authDomain: "users-app-90ef0.firebaseapp.com",
  projectId: "users-app-90ef0",
  storageBucket: "users-app-90ef0.appspot.com",
  messagingSenderId: "709300392067",
  appId: "1:709300392067:web:31fe886413365ccb218bb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;