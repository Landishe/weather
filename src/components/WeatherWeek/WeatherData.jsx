import styles from './WeatherWeek.module.css'
import { useEffect, useState } from 'react';
import { weatherApi } from '../../utils/api.js'
import React from 'react';




import IconThunderstroms from '../../assets/pictures/icons/weather/thunderstroms.svg';
import IconWind from '../../assets/pictures/icons/weather/wind.svg';
import Iconhumidity from '../../assets/pictures/icons/weather/pressure.svg';
import IconPressure from '../../assets/pictures/icons/weather/humidity.svg';
import IconSunny from '../../assets/pictures/icons/weather/sunny.svg'
import IconCloudy from '../../assets/pictures/icons/weather/cloudy.svg'
import IconClearСloudy from '../../assets/pictures/icons/weather/clear-cloudy.svg'
import IconDrizzle from '../../assets/pictures/icons/weather/drizzle.svg'
import IconRainSlight from '../../assets/pictures/icons/weather/RainSlight.svg'
import IconShowers from '../../assets/pictures/icons/weather/showers.svg'
import IconSnowFlurries from '../../assets/pictures/icons/weather/snow-flurries.svg'
import IconSleet from '../../assets/pictures/icons/weather/sleet.svg'
import IconSnow from '../../assets/pictures/icons/weather/snow.svg'

function WeatherData() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const [err, setErr] = useState('данные не загружены')

  useEffect(() => {
    const weatherApiAsync = async () => {
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
    };

      weatherApiAsync();
    }, []);
      
  if (weatherData && weatherData.daily) {
    console.log(weatherData.daily.time)
    return <div className={styles.isLoading}></div>
  } else if (err) {
    return <div>Произошла ошибка: {err}</div>;
  } else { 
    // Данные загружены, можно безопасно использовать weatherData
    return (
      <>
        
        <p>{weatherData.daily.time} </p>
      </>
    );
  }
}
   


export default WeatherData;

  
