import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../../firebase/firebase.init';


// Auth Provider
const AuthProvider = ({children}) =>{

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // Create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // Sign In With Email and password
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    // Sign Out User
    const SignOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    };

    // observer
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUSer =>{
            setUser(currentUSer);
            console.log('state captured')
            setLoading(false)
        })
        return () => 
            unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        SignOutUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;