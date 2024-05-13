import styles from './WeatherToday.module.css';
import IconWeather from '../../assets/pictures/icons/weather/thunderstroms.svg';
import IconWind from '../../assets/pictures/icons/weather/wind.svg';
import IconPressure from '../../assets/pictures/icons/weather/pressure.svg';
import IconHumidity from '../../assets/pictures/icons/weather/humidity.svg';
import '../MainPage/all-section.css';


function WeatherToday() {
  return (
    <div className="all-section">
      <section className={styles.weatherToday}>
        <div className={styles.date}>
          <span>четверг, 21 марта 12.00</span>
        </div>
        <div className={styles.weatherNow}>
          <div className={styles.weather}>
            <p className={styles.temperature}>{+18}</p>
            <div className={styles.weatherPhenomenon}>
              <img
                width={58}
                height={53}
                src={IconWeather}
                alt="ощущение погоды"
              />
              <p className={styles.PhenomenonContent}>гроза</p>
            </div>
          </div>
          <div className={styles.feltWeather}>
            <p >ощущается как +10</p>
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
            <p className={styles.windSpeed}>2.5 м/с Ю</p>
          </div>
          <div className={styles.pressure}>
            <img
              width={26}
              height={26}
              src={IconPressure}
              alt="влажность"
            />
            <p className={styles.persent}>87%</p>
          </div>
          <div className={styles.humidity}>
            <img
              width={26}
              height={26}
              src={IconHumidity}
              alt="давление мм рт. столба"
            />
            <p className={styles.humidityText}>764 мм рт. ст.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WeatherToday;
