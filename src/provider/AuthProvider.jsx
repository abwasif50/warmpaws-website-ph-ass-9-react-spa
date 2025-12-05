import React, { useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebaseConfig";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSub();
  }, []);

  const loginWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const signupWithEmail = (email, password, displayName = "", photoURL = "") =>
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      if (displayName || photoURL) {
        return updateProfile(res.user, { displayName, photoURL }).then(() => res);
      }
      return res;
    });
  const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
  const logout = () => signOut(auth);
  const resetPassword = (email) => sendPasswordResetEmail(auth, email);
  const updateUserProfile = (profile) => {
    if (!auth.currentUser) return Promise.reject(new Error("No user logged in"));
    return updateProfile(auth.currentUser, profile).then(() => {
      setUser({ ...auth.currentUser, ...profile });
    });
  };

  const value = {
    user,
    loading,
    loginWithEmail,
    signupWithEmail,
    signInWithGoogle,
    logout,
    resetPassword,
    updateUserProfile,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
