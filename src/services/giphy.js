import axios from 'axios';


const GIPHY_API_KEY = 'GlVGYHkr3WSBnllca54iNt0yFbjz7L65';
const GIPHY_BASE_URL = 'https://api.giphy.com/v1/gifs';


export const searchGifs = async(query) => {
    try {
        const response = await axios.get(`${GIPHY_BASE_URL}/search`, {
            params: {
                q: query,
                api_key: GIPHY_API_KEY,
            },
        });

        return response.data.data;
    } catch (error) {
        console.error('Error searching GIFs:', error);
        return [];
    }
};