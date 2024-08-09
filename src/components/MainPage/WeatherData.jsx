import styles from '../WeatherWeek/WeatherWeek.module.css'
// import styles from '../ClothesToday/ClothesToday.module.css';
import { useEffect, useState } from 'react';
import { weatherApi } from '../../utils/api.js'
import React from 'react';
import WeatherWeek from '../WeatherWeek/WeatherWeek.jsx';
import ClothesToday from '../ClothesToday/ClothesToday.jsx';

function WeatherData() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const [err, setErr] = useState(null)

  useEffect(() => {
    const weatherApiAsynchronic = async () => {
      try {
        setIsLoading(true);
        const weatherFetched = await weatherApi();
        setWeatherData(weatherFetched);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
        setErr("Ошибка при загрузке данных.");
      } finally {
        setIsLoading(false);
      }
    }; weatherApiAsynchronic();
  }, []);

  

  if (isLoading) {
    return <div className={styles.isLoading}></div>
  } else if (err) {
    return <div>Произошла ошибка: {err}</div>;
  } else {  
    return (
      <> 
        <ClothesToday weatherData={weatherData.current.weather_code} />
        <WeatherWeek weatherData={weatherData.daily}/> 
      </>
    );
  }}


export default WeatherData;

