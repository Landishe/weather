import styles from './WeatherWeek.module.css'
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

function WeatherWeek({weatherData}) {
             
// Синхронизируем дату и время
    
  function syncArrays(){
    const WeekDay = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"];
    const firstDate = new Date(weatherData.time[6]);
    const firstDateDayIndex = firstDate.getDay()
    const syncDaysOfWeek = []
    for(let i = 0; i < weatherData.time.length +1; i++){
      const dayIndex = (firstDateDayIndex + i) % 7
      syncDaysOfWeek.push(WeekDay[dayIndex])
    }
    return syncDaysOfWeek;
  }
  const syncDays = syncArrays(weatherData.time)

        
  return (
    
    <div className={styles.weatherWeek}>
      {weatherData.weather_code.map((code, index) => (
      <section key = {index}>
        <div  className={styles.day}>
          <span className={styles.dayWeek}>{syncDays[index]}</span>
          <span className={styles.date}>{weatherData.time[index]}</span> 
          {(() =>{
          switch (code) { 
            case 0: return <img width={58} height={53} src={IconSunny} alt="Солнечно" />; 
            case 1: return <img width={58} height={53} src={IconClearСloudy} alt="мало облачно" />; 
            case 2: 
            case 3: return <img width={58} height={53} src={IconCloudy} alt="Облачно" />; 
            case 51: return <img width={58} height={53} src={IconDrizzle} alt="Моросящий дождь" />; 
            case 53:
            case 55: return <img width={58} height={53} src={IconShowers} alt="Сильно дождь" />; 
            case 61: return <img width={58} height={53} src={IconRainSlight} alt="Облачно с прояснениями" /> ;
            case 63: return <img width={58} height={53} src={IconRainSlight} alt="Облачно с прояснениями" /> ;
            case 65: 
            case 66: return <img width={58} height={53} src={IconShowers} alt="Сильный холодный дождь" />;  
            case 67: return <img width={58} height={53} src={IconSleet} alt="Снег с дождем" />; 
            case 71: return <img width={58} height={53} src={IconSnowFlurries} alt="Небольшой снег" />; 
            case 73: 
            case 75: return <img width={58} height={53} src={IconSnow} alt="Снегопад" />; 
            case 77: return <img width={58} height={53} src={IconSnow} alt="Снежная крупа" />; 
            case 80: return <img width={58} height={53} src={IconShowers} alt="Ливень" />; 
            case 81:
            case 82: return <img width={58} height={53} src={IconThunderstroms} alt="Ливень сильный" />; 
            case 85: return <img width={58} height={53} src={IconSnowFlurries} alt="Слабый снегопад" />; 
            case 86: return <img width={58} height={53} src={IconSnow} alt="Сильный снегопад" />
          }
          } )()}
          <span className={styles.temperatureWeek}>{weatherData.temperature_2m_max[index]}</span>
        </div>
      </section>
      ))}
    </div>   
  );
}



export default WeatherWeek;