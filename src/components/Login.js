import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/firebaseConfig';
import axios from 'axios';
import { USER_REGISTER_LOGIN } from "../api/api_list";

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

            // Send user information to your personal server
            await axios.post(USER_REGISTER_LOGIN, userInfo);

            console.log(userInfo); // Log the filtered user information
            // Optionally, you can redirect to another page or perform further actions here
        } catch (error) {
            console.error(error);
            // Handle error, show alert, etc.
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <button 
                className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                onClick={signin}
            >
                Sign In with Google
            </button>
        </div>
    );
}

export default Login;
