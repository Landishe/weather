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

function WeatherWeek({dataDay}) {
 
    return (
    
    <div className={styles.weatherWeek}>
      <section >
        <div className={styles.day}>
          <span className={styles.dayWeek}>понедельник</span>
          {/* <div >
            {dataDay.map((day, index) => ( <p key={index}>{day}</p> ))}
          </div> */}
          <img
            width={78}
            height={71}
            src={IconThunderstroms}
            alt=""
          />
          <span className={styles.temperatureWeek}>+15</span>
        </div>
      </section>
      <section>
        <div className={styles.day}>
          <span className={styles.dayWeek}>вторник</span>
          <span className={styles.temperatureWeek}>+17</span>
          
          <img
            width={78}
            height={71}
            src={IconThunderstroms}
            alt=""
          />
          <span className={styles.temperatureWeek}>+17</span>
        </div>
      </section>
      <section >
        <div className={styles.day}>
          <span className={styles.dayWeek}>среда</span>
          <span className={styles.date}>17 мая</span>
          <img
            width={78}
            height={71}
            src={IconThunderstroms}
            alt=""
          />
          <span className={styles.temperatureWeek}>+18</span>
        </div>
      </section>
      <section >
        <div className={styles.day}>
          <span className={styles.dayWeek}>четверг</span>
          <span className={styles.date}>18 мая</span>
          <img
            width={78}
            height={71}
            src={IconSunny}
            alt=""
          />
          <span className={styles.temperatureWeek}>+19</span>
        </div>
      </section>
      <section >
        <div className={styles.day}>
          <span className={styles.dayWeek}>Пятница</span>
          <span className={styles.date}>19 мая</span>
          <img
            width={78}
            height={71}
            src={IconSleet}
            alt=""
          />
          <span className={styles.temperatureWeek}>+20</span>
        </div>
      </section>
      <section >
        <div className={styles.day}>
          <span className={styles.dayWeek}>суббота</span>
          <span className={styles.date}>20 мая</span>
          <img
            width={78}
            height={71}
            src={IconCloudy}
            alt=""
          />
          <span className={styles.temperatureWeek}>+21</span>
        </div>
      </section>
      <section >
        <div className={styles.day}>
          <span className={styles.dayWeek}>воскресение</span>
          <span className={styles.date}>21 мая</span>
          <img
            width={78}
            height={71}
            src={IconCloudy}
            alt=""
          />
          <span className={styles.temperatureWeek}>+22</span>
        </div>
      </section>
      
    </div>   
  );
}


export default WeatherWeek;
