import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const signInUser = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const LogOut = () => {
        setLoading(false);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentuser =>{
            setUser(currentuser);
            console.log(currentuser)
            setLoading(false);
        });
        return (()=>{
            unsubscribe();
        })
    })

    const userProfile = (name, image) => {
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL:image
        })
    }

    const provider = new GoogleAuthProvider();

    const GoogleLogin = () =>{
        return signInWithPopup(auth, provider)
    }

    const authInfo  = {
        createUser,
        signInUser,
        LogOut,
        user,
        loading,
        userProfile,
        GoogleLogin

    }


    return (
      <AuthContext value={authInfo}>
            {children}
      </AuthContext>
    );
};

export default AuthProvider;