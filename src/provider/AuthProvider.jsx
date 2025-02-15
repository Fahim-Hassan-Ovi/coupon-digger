import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // console.log(user);

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }
    const updatePassword = (email) =>{
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }
    const reloadUser = async () => {
        await auth.currentUser.reload();
        setUser(auth.currentUser);
      };
    const authInfo = {
        user,
        setUser,
        createNewUser,
        signInWithGoogle,
        updatePassword,
        logOut,
        userLogin,
        loading,
        updateUserProfile,
        reloadUser
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            return () => {
                unsubscribe();
            }
        })
    }, [])
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;