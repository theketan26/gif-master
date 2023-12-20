import React from 'react';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';
import GifSearch from '../components/GifSearch';


const HomePage = () => {
    return (
        <div>
            <h1>Welcome to My GIF App</h1>

            <LoginForm />
            <RegistrationForm />

            <GifSearch />
        </div>
    );
};

export default HomePage;
