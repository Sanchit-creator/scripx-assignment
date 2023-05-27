import axios from 'axios';

const URL = 'https://api.tvmaze.com';


export const getItems = async (data) => {
    try {
        return await axios.get(`${URL}/search/shows/?q=${data}`);
    } catch (error) {
        console.log('Error', error.response.data);
    }
}

export const details = async (data) => {
    try {
        return await axios.get(`${URL}/shows/${data}`);
    } catch (error) {
        console.log('Error', error.response.data);
    }
}


