// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDt4nKTpcSxfu7mqVd26KPUY9nuF4kafg4",
  authDomain: "war-memorial-e2da9.firebaseapp.com",
  projectId: "war-memorial-e2da9",
  storageBucket: "war-memorial-e2da9.appspot.com",
  messagingSenderId: "390471337104",
  appId: "1:390471337104:web:7e5da58651841dde8f0415",
  measurementId: "G-W3RFFNGRHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);
export default app