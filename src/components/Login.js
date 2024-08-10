import React from 'react';
import GoogleButton from 'react-google-button';
import { json } from 'react-router-dom';
import {signin} from '../googleSignin';

const Login = ({setIsLogin}) => {
    return (
        <div className="flex justify-center items-center">
            <GoogleButton
                label='Continue with Google'
                onClick={()=>signin(setIsLogin)}
            />
        </div>
    );
}

export default Login;
