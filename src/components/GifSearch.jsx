"use client";


import React, { useState, useEffect } from 'react';
import { searchGifs } from '../services/giphy';
import './globals.css'
import Image from 'next/image';


const GifSearch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [gifs, setGifs] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isHovering, setIsHovering] = useState(false);


    const handleSearch = async () => {
        setGifs([]);
        setIsLoading(true);
        const results = await searchGifs(query);
        setGifs(results);
        setIsLoading(false);
        if (results.length == 0) {
            setIsEmpty(true);
        } else {
            setIsEmpty(false);
        }
    };


    const onMouseEnter = () => {
        setIsHovering(true);
    };


    const onMouseLeave = (event) => {
        setIsHovering(false);
    };


    // useEffect(() => {
    //     if (query !== '') {
    //         handleSearch();
    //     }
    // }, [query]);


    return (
        <div className = 'flex flex-col bg-stone-900/25 m-10 rounded-xl py-5'>
            <div className = 'mt-5 me-5 w-1/2 self-center flex justify-between'>
                <input className = 'w-full me-5 self-center h-10 text-xl px-4 rounded-xl min-w-[150px]'
                    placeholder = 'Search'
                    type="text" value={ query } onChange={(e) => setQuery(e.target.value)} />
                <button className = 'p-2 text-xl bg-stone-200 w-28 self-center rounded-full text-stone-800 font-bold bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900'
                    onClick={handleSearch}>Search</button>
            </div>


            <div className = 'h-4 mt-2 self-center'>
                {
                    isLoading && 
                        <img
                            src = 'images/Spinner.svg'
                            width = { 80 }
                            height = { 80 }
                            alt = 'Loading'
                        />
                }
            </div>

            <div className = 'w-4/5 mt-10 self-center flex flex-row flex-wrap justify-evenly'>
                {
                    isEmpty && 
                        <span className = 'font-bold text-xl text-rose-200'>
                            No GIF found
                        </span>
                }
                {gifs.map((gif) => (
                    <div>
                        <img className = 'h-200 m-2'
                            onMouseEnter = { onMouseEnter }
                            onMouseLeave = { onMouseLeave }
                            key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} 
                        />  
                        <div className = 'static'>
                            <img className = 'w-10 absolute'
                                src = '/images/star-empty.png'
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
  );
};


export default GifSearch;
