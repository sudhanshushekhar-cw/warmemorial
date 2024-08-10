import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/firebaseConfig';
import axios from 'axios';
import { USER_REGISTER_LOGIN } from "../api/api_list";
import GoogleButton from 'react-google-button';
import { json } from 'react-router-dom';

const Login = () => {

    // Sign in with Google
    const signin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Filter important user information
            const userInfo = {
                name: user.displayName,
                email: user.email,
                uid: user.uid,
                photoURL: user.photoURL
            };

            try {
                // Send user information to your personal server
                const response = await axios.post(USER_REGISTER_LOGIN, userInfo);
                localStorage.setItem('loginData', JSON.stringify(response.data));
                
                // Optionally redirect or show user feedback
                // e.g., window.location.href = '/home';
            } catch (error) {
                console.error('Error sending user info to server:', error);
                // Handle error, show user notification, etc.
            }
        } catch (error) {
            console.error('Error signing in with Google:', error);
            // Handle error, show alert, etc.
        }
    }

    return (
        <div className="flex justify-center items-center">
            <GoogleButton
                label='Continue with Google'
                onClick={signin}
            />
        </div>
    );
}

export default Login;
