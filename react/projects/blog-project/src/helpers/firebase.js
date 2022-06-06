// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK82dS25Sj15tUwpJ21KToDTjYyZT8gWA",
  authDomain: "react-blog-app-26457.firebaseapp.com",
  databaseURL: "https://react-blog-app-26457-default-rtdb.firebaseio.com",
  projectId: "react-blog-app-26457",
  storageBucket: "react-blog-app-26457.appspot.com",
  messagingSenderId: "582687630910",
  appId: "1:582687630910:web:b5a99e22c58516d2e0536f"
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getDatabase(app);
