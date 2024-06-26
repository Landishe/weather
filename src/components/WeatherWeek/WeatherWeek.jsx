import styles from './WeatherWeek.module.css'
import React from 'react';
import WeatherData from './WeatherData';

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
  
  const dataDay = weatherData.time
  const Temperatur = weatherData.temperature_2m_max

   
  return (
    
    <div className={styles.weatherWeek}>
      <section >
        <div className={styles.day}>
          <span className={styles.dayWeek}>Понедельник</span>
          <span className={styles.date}>{dataDay[0]}</span>
          <img
            width={78}
            height={71}
            src={IconThunderstroms}
            alt=""
          />
          <span className={styles.temperatureWeek}>{Temperatur[0]}</span>
        </div>
      </section>
      <section>
        <div className={styles.day}>
          <span className={styles.dayWeek}>Вторник</span>
          <span className={styles.date}>{dataDay[1]}</span>          
          <img
            width={78}
            height={71}
            src={IconThunderstroms}
            alt=""
          />
          <span className={styles.temperatureWeek}>{Temperatur[1]}</span>
        </div>
      </section>
      <section >
        <div className={styles.day}>
          <span className={styles.dayWeek}>среда</span>
          <span className={styles.date}>{dataDay[2]}</span> 
          <img
            width={78}
            height={71}
            src={IconThunderstroms}
            alt=""
          />
          <span className={styles.temperatureWeek}>{Temperatur[2]}</span>
        </div>
      </section>
      <section >
        <div className={styles.day}>
          <span className={styles.dayWeek}>четверг</span>
          <span className={styles.date}>{dataDay[3]}</span> 
          <img
            width={78}
            height={71}
            src={IconSunny}
            alt=""
          />
          <span className={styles.temperatureWeek}>{Temperatur[3]}</span>
        </div>
      </section>
      <section >
        <div className={styles.day}>
          <span className={styles.dayWeek}>Пятница</span>
          <span className={styles.date}>{dataDay[4]}</span> 
          <img
            width={78}
            height={71}
            src={IconSleet}
            alt=""
          />
          <span className={styles.temperatureWeek}>{Temperatur[4]}</span>
        </div>
      </section>
      <section >
        <div className={styles.day}>
          <span className={styles.dayWeek}>суббота</span>
          <span className={styles.date}>{dataDay[5]}</span> 
          <img
            width={78}
            height={71}
            src={IconCloudy}
            alt=""
          />
          <span className={styles.temperatureWeek}>{Temperatur[5]}</span>
        </div>
      </section>
      <section >
        <div className={styles.day}>
          <span className={styles.dayWeek}>воскресение</span>
          <span className={styles.date}>{dataDay[6]}</span> 
          <img
            width={78}
            height={71}
            src={IconCloudy}
            alt=""
          />
          <span className={styles.temperatureWeek}>{Temperatur[6]}</span>
        </div>
      </section>
    </div>   
  );
}


export default WeatherWeek;