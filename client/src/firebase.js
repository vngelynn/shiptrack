// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZRJUmVglyf8Lz3oOqdDp1HW4Fk78ZMsk",
  authDomain: "shiptrack-6e3c2.firebaseapp.com",
  projectId: "shiptrack-6e3c2",
  storageBucket: "shiptrack-6e3c2.appspot.com",
  messagingSenderId: "791436716624",
  appId: "1:791436716624:web:61d62934cb44a2cd753f55",
  measurementId: "G-XBCL43C2DX"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;