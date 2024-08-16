// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC07uIYDF6ea3Ja3FJSLG2vGeX3UUXDyh0",
  authDomain: "tuitionservice-e63d2.firebaseapp.com",
  projectId: "tuitionservice-e63d2",
  storageBucket: "tuitionservice-e63d2.appspot.com",
  messagingSenderId: "83328615553",
  appId: "1:83328615553:web:6f1acd85c44138128b3980"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;