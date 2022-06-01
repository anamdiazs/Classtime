// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDDZ6G1Mejw4R9hPwSPQ9twoHIkX-pHJvQ",
  authDomain: "classtime-349918.firebaseapp.com",
  projectId: "classtime-349918",
  storageBucket: "classtime-349918.appspot.com",
  messagingSenderId: "874724046701",
  appId: "1:874724046701:web:466854f4e8ac533599cc64",
  measurementId: "G-8W4QNMBYFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);