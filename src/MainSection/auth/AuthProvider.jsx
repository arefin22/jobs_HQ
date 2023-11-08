/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "./firebase.config"
import { toast } from "react-toastify";



export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword (auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword (auth, email, password)
    }


    const googleAuth = new GoogleAuthProvider();

    const signInUsingPopup = () => {
        return signInWithPopup(auth, googleAuth)
            .then(res => toast('Successful Sign In', res))
            .catch(err => toast('Try Again Please', err))
    }

    const signOutFromSite = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])





    const authInfo = {
        user,
        loading,
        registerUser,
        signInUser,
        signInUsingPopup,
        signOutFromSite
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;