// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE2PNap2Yq2j2LPUQuLlU6Zu1ynnyqeEQ",
  authDomain: "fire-contact-app-ce111.firebaseapp.com",
  databaseURL: "https://fire-contact-app-ce111-default-rtdb.firebaseio.com",
  projectId: "fire-contact-app-ce111",
  storageBucket: "fire-contact-app-ce111.appspot.com",
  messagingSenderId: "283970270017",
  appId: "1:283970270017:web:b4871ad40189cb5240e7c0"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;

