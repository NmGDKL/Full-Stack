
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    GoogleAuthProvider,
    signInWithRedirect
} from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

    const firebaseConfig = {
        apiKey: "AIzaSyBIpFvOG-FAV7SwOEEEfWCbB1CLUsjavlY",
        authDomain: "movie-app-ff33a.firebaseapp.com",
        projectId: "movie-app-ff33a",
        storageBucket: "movie-app-ff33a.appspot.com",
        messagingSenderId: "861745453702",
        appId: "1:861745453702:web:88e3ae7080b39c8cf38f07",
        measurementId: "G-KRBH0E5PSH"
    };


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
    try {
        let userCredential = await createUserWithEmailAndPassword(auth, email, password)
        navigate("/");
        console.log(userCredential)
    } catch (error) {
        alert(error.message);
    }
}
export const signIn = async (email, password, navigate) => {
 try {
     let userCredential = await
signInWithEmailAndPassword(auth, email, password);
navigate("/");
console.log(userCredential);
} catch (error) {
    alert(error.message);

}
};

export const logOut = (navigate) => {
    signOut(auth);
    navigate("/login");
};

export const googleSignIn = async (navigate) => {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    signInWithRedirect(auth, provider);
    navigate("/");
};

