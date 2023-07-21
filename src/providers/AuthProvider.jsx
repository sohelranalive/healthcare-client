import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('Auth State Observer: ', loggedUser);
            setUser(loggedUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    })

    const userSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userProfileUpdate = (userName, userProfilePhoto) => {
        return updateProfile(auth.currentUser, { displayName: userName, photoURL: userProfilePhoto })
    }

    const userLogOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        loading,
        user,
        userSignUp,
        userProfileUpdate,
        userLogOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;