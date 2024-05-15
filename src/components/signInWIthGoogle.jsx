import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from './firebase'; // Assuming you have a file named firebase.js for your Firebase config

const SignInwithGoogle = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      // Handle successful sign-in (e.g., redirect to profile page)
    } catch (error) {
      console.error("Error signing in with Google:", error);
      // Handle sign-in error (e.g., display an error message)
    }
  };

  return (
    <button onClick={handleGoogleSignIn}>Sign in with Google</button>
  );
};

export default SignInwithGoogle;