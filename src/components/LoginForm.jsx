"use client";


import React, { useState } from 'react';
import firebase from '../firebase';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { useRouter } from 'next/router';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [note, setNote] = useState('');
    const { push } = useRouter();


    const handleLogin = async() => {
        try {
            await signInWithEmailAndPassword(firebase, email, password);
            console.log('Logged in!');
            push('/');
        } catch (error) {
            console.error('Error logging in:', error.message);
            setNote(error.message);
            if (error.message == 'Firebase: Error (auth/invalid-credential).') {
                setNote('Invalid Email or Password');
            } else if (error.message == 'Firebase: Error (auth/invalid-email).') {
                setNote('Invalid Email');
            } else {
                setNote('Unknown error occurred');
            }
        }
    };


    const backHome = () => {
        push('/');
    };


    return (
        <div className = 'mt-12 h-100 flex flex-box flex-col align-center'>
            <button className = 'absolute right-0 top-0 p-2 mt-5 me-2 text-m bg-stone-200 w-20 self-center rounded-full text-stone-800 font-bold bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900' 
                onClick = { backHome }
                >Back</button>

            <input className = 'w-1/4 px-3 py-2 rounded-xl self-center'
                placeholder = 'Email'
                type = "email"
                value = { email }
                onChange = {
                    (e) => setEmail(e.target.value) }
            /> 
            <input className = 'w-1/4 px-3 py-2 mt-3 rounded-xl self-center'
                placeholder = 'Password'
                type = "password"
                value = { password }
                onChange = {
                    (e) => setPassword(e.target.value) }
            /> 
            <button className = 'p-2 mt-8 text-xl bg-stone-200 w-28 self-center rounded-full text-stone-800 font-bold bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900'
                onClick = { handleLogin } > Login 
            </button> 

            <span className = 'mt-4 self-center text-rose-300'
            >{ note }</span>
        </div>
    );
};


export default LoginForm;