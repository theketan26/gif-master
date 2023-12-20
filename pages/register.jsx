import React, { useState } from 'react';
import RegistrationForm from '../src/components/RegistrationForm';


const RegisterPage = () => {
	return (
		<div className = 'w-screen h-screen flex flex-col bg-gradient-to-l from-green-700 via-cyan-800 to-slate-800'>
			<h1 className = 'text-7xl font-bold font-family: ui-monospace text-stone-200 mt-40 self-center'>Register</h1>	
			<RegistrationForm />
		</div>
	);
};


export default RegisterPage;
