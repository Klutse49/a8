import React, { useEffect, useState } from 'react';
import styles from '../styles/WeatherAndQuote.module.css'; 

function WeatherAndQuote() {
  const [weather, setWeather] = useState({ temp: 'Loading...', description: 'Loading...' });
  const [quote, setQuote] = useState({ content: 'Fetching quote...', author: '' });

  useEffect(() => {
    const fetchWeatherAndQuote = async () => {
      try {
        const weatherResponse = await fetch('https://api.open-meteo.com/v1/forecast?latitude=39.9526&longitude=-74.9927&current_weather=true');
        const weatherData = await weatherResponse.json();
        setWeather({
          temp: weatherData.current_weather.temperature,
          description: weatherData.current_weather.weather?.description || "Clear"
        });

        const quoteResponse = await fetch('https://api.quotable.io/random');
        const quoteData = await quoteResponse.json();
        setQuote({ content: quoteData.content, author: quoteData.author });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchWeatherAndQuote();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.weather}>
        <h2>Weather Data</h2>
        <p><strong>Temperature:</strong> {weather.temp} °C</p>
        <p><strong>Condition:</strong> {weather.description}</p>
      </div>
      <div className={styles.quote}>
        <h2>Random Quote</h2>
        <p>"{quote.content}"</p>
        <p>— {quote.author}</p>
      </div>
    </div>
  );
}

export default WeatherAndQuote;
