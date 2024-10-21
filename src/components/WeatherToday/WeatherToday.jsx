import styles from './WeatherToday.module.css';
import WeatherNow from './WeatherNow.jsx';
import IconWind from '../../assets/pictures/icons/weather/wind.svg';
import Iconhumidity from '../../assets/pictures/icons/weather/pressure.svg';
import IconPressure from '../../assets/pictures/icons/weather/humidity.svg';
import '../../global.css';

function WeatherToday( {weatherData} ) {
  console.log(weatherData.current.time);

  // Выводим дату на сегодня  
  let dateToday = weatherData.current.time;
  const date = new Date(dateToday);
  console.log(date)
  let formaterDay = new Intl.DateTimeFormat('ru', { 
    dateStyle: "full",
    timeStyle: 'short',
  });

  // console.log(formaterDay.format(dateToday));

  return (
    <div className="all-section">
      <section className={styles.weatherToday}>
        <div className={styles.date}>
          <span>{formaterDay.format()}</span>
        </div>
        <div className={styles.weatherNow}>
          <div className={styles.weather}>
            <p className={styles.temperature}>
              {weatherData.current.temperature_2m}
            </p>
            <div className={styles.weatherPhenomenon}>
              <WeatherNow weatherCode={weatherData.current.weather_code} />
            </div>
          </div>
          <div className={styles.feltWeather}>
            <p>{`ощущется как ` + weatherData.current.apparent_temperature}</p>
          </div>
        </div>
        <div className={styles.params}>
          <div className={styles.wind}>
            <img
              width={26}
              height={26}
              src={IconWind}
              alt="скорость ветра"
            />
            <p className={styles.windSpeed}>
              {weatherData.current.wind_speed_10m}
            </p>
            <p className={styles.windSpeed}>
              {weatherData.current_units.wind_speed_10m}
            </p>
          </div>
          <div className={styles.pressure}>
            <img
              width={26}
              height={26}
              src={Iconhumidity}
              alt="влажность"
            />
            <p className={styles.perсent}>
              {weatherData.current.relative_humidity_2m + ` %`}
            </p>
          </div>
          <div className={styles.pressure}>
            <img
              width={26}
              height={26}
              src={IconPressure}
              alt="давление мм рт. столба"
            />
            <p className={styles.humidityText}>764 мм рт. ст.</p>
          </div>
        </div>
      </section>
    </div>
  );}


export default WeatherToday;
