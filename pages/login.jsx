import React, { useState } from 'react';
import LoginForm from '../src/components/LoginForm';
import './globals.css'


const LoginPage = () => {
	return (
		<div className = 'w-screen h-screen flex flex-col bg-gradient-to-l from-green-700 via-cyan-800 to-slate-800'>
			<h1 className = 'text-7xl font-bold font-family: ui-monospace text-stone-200 mt-40 self-center'>Login</h1>	
			<LoginForm />
		</div>
	);
};


export default LoginPage;
