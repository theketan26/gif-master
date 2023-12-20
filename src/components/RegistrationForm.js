"use client";


import React, { useState } from 'react';
import firebase from '../firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';


const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleRegistration = async() => {
        try {
            await createUserWithEmailAndPassword(firebase, email, password);
            console.log('Regisered!')
        } catch (error) {
            console.error('Error registering:', error.message);
        }
    };


    return (
        <div >
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
            <button onClick = { handleRegistration } > Register </button> 
        </div>
    );
};


export default RegistrationForm;