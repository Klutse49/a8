import React, { useEffect, useState } from 'react';
import styles from './RealTimeData.module.css';

const RealTimeData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "YOUR_API_KEY_HERE"; // Replace with your API key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []); // The empty array means this effect runs once after the initial render

  return (
    <section className={styles.realTimeData}>
      <h2>Real Time Data</h2>
      {data ? (
        <div>
          <p><strong>City:</strong> {data.name}</p>
          <p><strong>Temperature:</strong> {data.main.temp} °C</p>
          <p><strong>Weather:</strong> {data.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading real-time data...</p>
      )}
    </section>
  );
};

export default RealTimeData;
