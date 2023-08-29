import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    // private route
    const [user, setUser] = useState(null);
    // set loading
    const [loading, setLoading] = useState(true)

    // logout
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        logOut,
    }

    // private route
    useEffect(()=>{
        const  unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log('log', loggedUser)
            setUser(loggedUser);
            setLoading(false)
        })
        return() =>{
            unsubscribe();
        }
    },[])


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;