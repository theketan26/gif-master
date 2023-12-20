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
        <div className = 'mt-12 h-100 flex flex-box flex-col align-center'>
            <input className = 'w-1/4 px-3 py-2 rounded-xl self-center'
                type = "email"
                value = { email }
                onChange = {
                    (e) => setEmail(e.target.value) }
            /> 
            <input className = 'w-1/4 px-3 py-2 mt-3 rounded-xl self-center'
                type = "password"
                value = { password }
                onChange = {
                    (e) => setPassword(e.target.value) }
            /> 
            <button className = 'p-2 mt-8 text-xl bg-stone-200 w-28 self-center rounded-full text-stone-800 font-bold bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900'
                onClick = { handleLogin } > Login 
            </button> 
        </div>
    );
};


export default LoginForm;