// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyCWtj2zcqNZ1vtRlPjhO_OUQyOcRj1CM",
  authDomain: "shopping-site-380ba.firebaseapp.com",
  projectId: "shopping-site-380ba",
  storageBucket: "shopping-site-380ba.appspot.com",
  messagingSenderId: "624042334989",
  appId: "1:624042334989:web:78937e503bda59e1646e44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app