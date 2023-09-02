/** @format */

import { createContext, useEffect, useState } from "react";
import {
  RecaptchaVerifier,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // private route
  const [user, setUser] = useState(null);
  // set loading
  const [loading, setLoading] = useState(true);

  // create reCaptcha
  // const sendOTP = async (number) => {
  //   const recaptchaVerifier = new RecaptchaVerifier(
  //     "recaptcha-container",
  //     {},
  //     auth
  //   );
  //   recaptchaVerifier.render();
  //   return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  // };

  const googleSignUp = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    logOut,
    loading,
    googleSignUp,
    googleSignIn,
  };

  // private route
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      // console.log("log", loggedUser);
      setUser(loggedUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
