import styles from './ClothesToday.module.css';
import { useEffect, useState } from 'react';
import { weatherApi } from '../../utils/api.js'
import ClothesToday from './ClothesToday.jsx';


function WeatherDataClothes() {
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
    console.log (weatherData)
  
    return (
      <> 
        
        <ClothesToday weatherData={weatherData.current.weather_code} /> 
      </>
    );
  }}


export default WeatherDataClothes;

