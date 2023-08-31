/** @format */

import { createContext, useEffect, useState } from "react";
import {
  RecaptchaVerifier,
  getAuth,
  onAuthStateChanged,
  signInWithPhoneNumber,
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
  const sendOTP = async (phoneNumber) => {
    const recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {
      size: "invisible", // or 'normal'
      callback: (response) => {
        // reCAPTCHA solved, proceed to send OTP
        console.log(response);
      },
    });

    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        recaptchaVerifier
      );
      // Store the confirmationResult for later use
      return confirmationResult;
    } catch (error) {
      console.error("Error sending OTP:", error);
      throw error;
    }
  };

  // logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    logOut,
    sendOTP,
    loading,
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
