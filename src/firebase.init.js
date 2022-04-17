// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmAYUQIA-F1WOz8nHcAg_6QcZKQU5OAvc",
  authDomain: "independent-service-prov-800ac.firebaseapp.com",
  projectId: "independent-service-prov-800ac",
  storageBucket: "independent-service-prov-800ac.appspot.com",
  messagingSenderId: "229948032381",
  appId: "1:229948032381:web:6d6442db8e1c883159f814"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;