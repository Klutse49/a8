import React, { useState, useEffect } from 'react';
import styles from '../styles/WeatherWidget.module.css'; // Ensure you have this CSS module

const WeatherWidget = ({ city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      // Using template literals for readability, even though `city` is not used in the API call
      const url = `https://api.open-meteo.com/v1/forecast?latitude=39.9526&longitude=-74.9927&current_weather=true`;
      
      try {
        const response = await fetch(url);
        const data = await response.json();
        setWeather(data.current_weather);
      } catch (error) {
        console.error("Failed to fetch weather data", error);
      }
    };

    fetchWeather();
  }, [city]); // If city isn't used in the API call, you might not need this dependency

  if (!weather) return <p>Loading weather...</p>;

  return (
    <div className={styles.widget}>
      <h2>Weather in {city}</h2>
      {/* Adjusting the data paths according to Open-Meteo response structure */}
      <p>Temperature: {weather.temperature}°C</p>
      <p>Wind Speed: {weather.windspeed} km/h</p>
      {/* Open-Meteo doesn't provide a simple "condition" text, so you might display something else */}
    </div>
  );
};

export default WeatherWidget;
