"use client";


import React, { useState } from 'react';
import firebase from '../firebase';
import { signInWithEmailAndPassword } from '@firebase/auth';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async() => {
        try {
            await signInWithEmailAndPassword(firebase, email, password);
            console.log('Logged in!')
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    };


    return (
        <div>
            <input type = "email"
                value = { email }
                onChange = {
                    (e) => setEmail(e.target.value) }
            /> 
            <input type = "password"
                value = { password }
                onChange = {
                    (e) => setPassword(e.target.value) }
            /> 
            <button onClick = { handleLogin } > Login </button> 
        </div>
    );
};


export default LoginForm;