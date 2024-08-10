import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './Firebase/firebaseConfig';
import axios from 'axios';
import { USER_REGISTER_LOGIN } from "./api/api_list";


export const signin = async (setIsLogin) => {
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
            setIsLogin(true);

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