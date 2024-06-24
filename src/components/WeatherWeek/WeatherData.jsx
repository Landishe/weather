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

    // const weatherCodes = () => {
    //   if (weatherData && weatherData.current) {
    //     const weatherCode = weatherData.daily.weather_code;  
    //       console.log(weatherCode[0]) 
    //       for(let key in weatherCode){
    //         console.log(weatherCode)
    //         if(key === weatherCode){
              
    //           switch (weatherCode) {
    //           case 0: <img width={58} height={53} src={IconSunny} alt="Солнечно" /> 
    //           case 1: <img width={58} height={53} src={IconClearСloudy} alt="мало облачно" />
    //           case 2:  
    //           case 3: <img width={58} height={53} src={IconCloudy} alt="Облачно" />
    //           case 51: <img width={58} height={53} src={IconDrizzle} alt="Моросящий дождь" />
    //           case 55: <img width={58} height={53} src={IconShowers} alt="Сильно дождь" />   
    //           case 61: <img width={58} height={53} src={IconRainSlight} alt="Облачно с прояснениями" />
    //           case 65:            
    //           case 66: <img width={58} height={53} src={IconShowers} alt="Сильный холодный дождь" />
    //           case 67: <img width={58} height={53} src={IconSleet} alt="Снег с дождем" />
    //           case 71: <img width={58} height={53} src={IconSnowFlurries} alt="Небольшой снег" />
    //           case 73:
    //           case 75: <img width={58} height={53} src={IconSnow} alt="Снегопад" />
    //           case 77: <img width={58} height={53} src={IconSnow} alt="Снежная крупа" />
    //           case 80: <img width={58} height={53} src={IconShowers} alt="Ливень" />
    //           case 81:
    //           case 82: <img width={58} height={53} src={IconThunderstroms} alt="Ливень сильный" />
    //           case 85: <img width={58} height={53} src={IconSnowFlurries} alt="Слабый снегопад" />
    //           case 86: <img width={58} height={53} src={IconSnow} alt="Сильный снегопад" />
    //           default:
    //             return <div>Неизвестная погода</div>;
    //           }
    //         } else {
    //           return <div>Данные о погоде не загружены</div>;
        //     }}
          
        //     }
        // };



// function WeatherData() {
//   const [weatherData, setWeatherData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [err, setErr] = useState(null); // Используем null для ошибки

//   useEffect(() => {
//     const weatherApiAsync = async () => {
//       try {
//         setIsLoading(true);
//         const weatherFetched = await weatherApi();
//         setWeatherData(weatherFetched);
//       } catch (error) {
//         console.error("Ошибка при загрузке данных:", error);
//         setErr("Ошибка при загрузке данных.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     weatherApiAsync();
//   }, []);

//   if (isLoading) {
//     return <div>Загрузка данных...</div>;
//   } else if (err) {
//     return <div>Произошла ошибка: {err}</div>;
//   } else { 
//     // Данные загружены, можно безопасно использовать weatherData
//     return (
//       <>
//         <p className={styles.date}>
//           Максимальная температура: {weatherData?.daily?.temperature_2m_max}
//         </p>
//         <WeatherWeek weatherData={weatherData} /> 
//       </>
//     );
//   }
// }
        
// useEffect (() => {
//   const waetherApiAsync = async() => {
//     try{
//       setIsLoading(true);
//       const weatherFetched = await weatherApi();
//       setWeatherData(weatherFetched)
//     }catch(err){
//       console.error("Ошибка при загрузке данных")
//       console.log(err)
//       setErr("Ошибка при загрузке данных.");
//     }        
//   };
//    waetherApiAsync();
// }, []);

// if (isLoading){
//   console.log("Загрузка данных...")
// } else if (err) {
//     return <div>Произошла ошибка: {err}</div>;
//   } else {
//   return (
//     <>
//       <p className={styles.date}>
//         Максимальная температура: {weatherData?.daily?.temperature_2m_max}
//       </p>
//       <WeatherWeek weatherData={weatherData} /> 
//     </>
// )
// }
// };
