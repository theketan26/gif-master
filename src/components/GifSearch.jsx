"use client";


import React, { useState, useEffect } from 'react';
import { searchGifs } from '../services/giphy';
import './globals.css'


const GifSearch = () => {
    const [query, setQuery] = useState('');
    const [gifs, setGifs] = useState([]);
    const [isHovering, setIsHovering] = useState(false);


    const handleSearch = async () => {
        const results = await searchGifs(query);
        setGifs(results);
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
        <div className = 'w-screen flex flex-col'>
            <div className = 'mt-20 w-1/2 self-center flex flex-col'>
                <input className = 'w-1/2 self-center h-10 text-xl px-4 rounded-xl'
                    type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
                <button className = 'p-2 mt-5 text-xl bg-stone-200 w-28 self-center rounded-full text-stone-800 font-bold bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900'
                    onClick={handleSearch}>Search</button>
            </div>

            <div className = 'w-4/5 mt-28 self-center flex flex-row flex-wrap justify-evenly'>
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
