import styles from './WeatherWeek.module.css'
import React from 'react';
import DayOfWeek from './DayOfWeek';

function WeatherWeek({weatherData}) {
             

  return (
    <div className={styles.weatherWeek}>
      <DayOfWeek weatherData ={weatherData}/>
    </div>
  );
}



export default WeatherWeek;

