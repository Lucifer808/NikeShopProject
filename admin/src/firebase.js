// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoTLaYljy8tnx8jc0LQGqghzcG7J6drf4",
  authDomain: "nikeshop-adebc.firebaseapp.com",
  projectId: "nikeshop-adebc",
  storageBucket: "nikeshop-adebc.appspot.com",
  messagingSenderId: "248310292134",
  appId: "1:248310292134:web:762261581af1226d199e67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;