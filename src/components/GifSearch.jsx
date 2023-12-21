"use client";


import React, { useState, useEffect } from 'react';
import { searchGifs } from '../services/giphy';
import './globals.css'
// import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';


const GifSearch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [gifs, setGifs] = useState([]);
    const [isHovering, setIsHovering] = useState(false);


    const handleSearch = async () => {
        setIsLoading(true);
        const results = await searchGifs(query);
        setGifs(results);
        setIsLoading(false);
    };


    const onMouseEnter = () => {
        setIsHovering(true);
    };


    const onMouseLeave = (event) => {
        setIsHovering(false);
    };


    useEffect(() => {
        if (query !== '') {
            handleSearch();
        }
    }, [query]);


    return (
        <div className = 'flex flex-col bg-stone-900/25 m-20 rounded-xl py-5'>
            <div className = 'mt-5 w-1/2 self-center flex justify-between'>
                <input className = 'w-full me-5 self-center h-10 text-xl px-4 rounded-xl min-w-[300px]'
                    placeholder = 'Search'
                    type="text" value={ query } onChange={(e) => setQuery(e.target.value)} />
                <button className = 'p-2 text-xl bg-stone-200 w-28 self-center rounded-full text-stone-800 font-bold bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900'
                    onClick={handleSearch}>Search</button>
            </div>

            <div className = 'w-4/5 mt-20 self-center flex flex-row flex-wrap justify-evenly'>
                {gifs.map((gif) => (
                    <img className = 'h-200 m-2'
                        onMouseEnter = { onMouseEnter }
                        onMouseLeave = { onMouseLeave }
                        key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />  
                ))}
            </div>
        </div>
  );
};


export default GifSearch;
