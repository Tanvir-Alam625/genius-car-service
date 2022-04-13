// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArfRsGzBVUWesBEPmNk6kHvJRLirzAx4E",
  authDomain: "genius-car-servies-46501.firebaseapp.com",
  projectId: "genius-car-servies-46501",
  storageBucket: "genius-car-servies-46501.appspot.com",
  messagingSenderId: "832095613947",
  appId: "1:832095613947:web:e5e5679e42037f3c9d515e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
