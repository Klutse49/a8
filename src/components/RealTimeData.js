import React, { useEffect, useState } from 'react';
import styles from './RealTimeData.module.css';

const RealTimeData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      
      const url = 'https://api.open-meteo.com/v1/forecast?latitude=39.9526&longitude=-74.9927&current_weather=true';

      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []); 

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
