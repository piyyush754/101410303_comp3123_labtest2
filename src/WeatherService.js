import axios from 'axios';

const API_KEY = '46cdc4c5330486101b3ba2aab58734bd';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city) => {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
};
