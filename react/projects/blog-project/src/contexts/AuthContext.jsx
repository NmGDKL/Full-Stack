import { createContext, useEffect, useState } from "react";
import { auth} from "../helpers/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/toastNotify";
export const AuthContext = createContext();



export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();


  const signup = (email, password, navigate) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      console.log("res", res);
      navigate("/")
      toastSuccessNotify("🦄 Logged in successfully!");
  })
    .catch((error) => {
      toastErrorNotify(error);
    });
    setCurrentUser(email);
  };

  const login = (email, password, navigate) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      console.log("res", res);
      navigate("/")
      toastSuccessNotify("🦄 Logged in successfully!");
  })
    .catch((error) => {
      toastErrorNotify(error);
    });
    setCurrentUser(email);
  };

  const logout = () => {
    signOut(auth);
  };

  const loginWithGoogle = (navigate) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(() => {
      userObserver(setCurrentUser);
      navigate("/")
      toastSuccessNotify("🦄 Logged in successfully!");
    })
    .catch((error) => {
      toastErrorNotify(error);
    });
  };

  const userObserver = (setCurrentUser) => {
    onAuthStateChanged(auth, (currentUser) =>{
      currentUser ? setCurrentUser(currentUser) : setCurrentUser(false);
    });
  };


  // const userObserver = (setCurrentUser) => {
  //   onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       setCurrentUser(currentUser);
  //     } else {
  //       setCurrentUser(false);
  //     }
  //   });
  // };

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{currentUser,login,signup,logout,loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthContextProvider;
