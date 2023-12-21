'use client';


import React, { useState, useEffect } from 'react';
import GifSearch from '../components/GifSearch.jsx';
import './globals.css';
import auth from '../firebase.js';


const HomePage = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState(null);
    // const { push } = useRouter();


    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            try {
                if (user) {
                    setIsLogged(true);
                    setUser(user);
                } else {
                    setIsLogged(false);
                    return;
                }
            } catch (error) {
                console.log(error);
            }
        })
    })


    const logOut = () => {
        auth.signOut();
        sessionStorage.clear();
    }


    return (
        <div className = 'flex flex-col'>
            {
                isLogged && <div className = 'w-screen me-3 flex justify-end'>
                                <span className = 'mt-6 text-xl font-bold me-2 text-stone-200'>
                                    { user.email }
                                </span>
                                <button className = 'p-2 mt-5 me-2 text-m bg-stone-200 w-20 self-center rounded-full text-stone-800 font-bold bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900'
                                    onClick = { logOut }>
                                    Logout
                                </button>
                            </div>
            }
            {
                !isLogged && <div className = 'w-screen me-3 flex justify-end'>
                                <a href = '/login'><button className = 'p-2 mt-5 me-2 text-m bg-stone-200 w-20 self-center rounded-full text-stone-800 font-bold bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900'
                                                    >Login</button></a>
                                <a href = '/register'><button className = 'p-2 mt-5 me-2 text-m bg-stone-200 w-20 self-center rounded-full text-stone-800 font-bold bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900'
                                                    >Register</button></a>
                            </div>
            }

            <h1 className = 'text-7xl font-bold font-family: ui-monospace text-stone-200 mt-10 self-center'>Gif Master</h1>

            <GifSearch />
        </div>
    );
};


export default HomePage;
