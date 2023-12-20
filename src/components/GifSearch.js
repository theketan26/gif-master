"use client";


import React, { useState, useEffect } from 'react';
import { searchGifs } from '../services/giphy';


const GifSearch = () => {
    const [query, setQuery] = useState('');
    const [gifs, setGifs] = useState([]);


    const handleSearch = async () => {
        const results = await searchGifs(query);
        setGifs(results);
    };


    useEffect(() => {
        if (query !== '') {
            handleSearch();
        }
    }, [query]);


    return (
        <div>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>

            {gifs.map((gif) => (
                <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
            ))}
        </div>
  );
};


export default GifSearch;
