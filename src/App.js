import React, { useState } from 'react';
import { getWeather } from './WeatherService';
import './App.css';

const App = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        try {
            const data = await getWeather(city);
            setWeather(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <div className="app-container">
            <h1>Weather App</h1>
            <div className="search-container">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city"
                    className="search-input"
                />
                <button onClick={fetchWeather} className="search-button">Search</button>
            </div>
            {weather && (
                <div className="weather-container">
                    <h2>{weather.name}</h2>
                    <img
                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt={weather.weather[0].description}
                        className="weather-icon"
                    />
                    <p>{weather.weather[0].description}</p>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                </div>
            )}
        </div>
    );
};

export default App;
