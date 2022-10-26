// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1rGMhPPQCqMOGM-3-JHVZOJWOsHPziIc",
  authDomain: "computer-science-client.firebaseapp.com",
  projectId: "computer-science-client",
  storageBucket: "computer-science-client.appspot.com",
  messagingSenderId: "48202155198",
  appId: "1:48202155198:web:00df8b1571ef9e54774aef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;