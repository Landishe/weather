import styles from './WeatherWeek.module.css';
import iconHail from '../../assets/pictures/icons/weather/hail.svg';
import iconWindy from '../../assets/pictures/icons/weather/windy.svg';
import iconTornado from '../../assets/pictures/icons/weather/tornado.svg';
import iconSunny from '../../assets/pictures/icons/weather/sunny.svg';
import iconSleet from '../../assets/pictures/icons/weather/sleet.svg';
import iconCloudy from '../../assets/pictures/icons/weather/cloudy.svg';

function WeatherWeek() {
  return (
    <div className={styles.weatherWeek}>
      <section >
        <div className={styles.day}>
          <span className={styles.dayWeek}>понедельник</span>
          <span className={styles.date}>22 марта</span>
          <img
            width={78}
            height={71}
            src={iconHail}
            alt=""
          />
          <span className={styles.temperatureWeek}>+18</span>
        </div>
      </section>
      <section>
        <div className={styles.day}>
          <span className={styles.dayWeek}>вторник</span>
          <span className={styles.date}>22 марта</span>
          <img
            width={78}
            height={71}
            src={iconWindy}
            alt=""
          />
          <span className={styles.temperatureWeek}>+18</span>
        </div>
      </section>
      <section >
        <div className={styles.day}>
          <span className={styles.dayWeek}>среда</span>
          <span className={styles.date}>22 марта</span>
          <img
            width={78}
            height={71}
            src={iconTornado}
            alt=""
          />
          <span className={styles.temperatureWeek}>+18</span>
        </div>
      </section>
      <section >
        <div className={styles.day}>
          <span className={styles.dayWeek}>четверг</span>
          <span className={styles.date}>22 марта</span>
          <img
            width={78}
            height={71}
            src={iconSunny}
            alt=""
          />
          <span className={styles.temperatureWeek}>+18</span>
        </div>
      </section>
      <section >
        <div className={styles.day}>
          <span className={styles.dayWeek}>Пятница</span>
          <span className={styles.date}>22 марта</span>
          <img
            width={78}
            height={71}
            src={iconSleet}
            alt=""
          />
          <span className={styles.temperatureWeek}>+18</span>
        </div>
      </section>
      <section >
        <div className={styles.day}>
          <span className={styles.dayWeek}>суббота</span>
          <span className={styles.date}>22 марта</span>
          <img
            width={78}
            height={71}
            src={iconCloudy}
            alt=""
          />
          <span className={styles.temperatureWeek}>+18</span>
        </div>
      </section>
      <section >
        <div className={styles.day}>
          <span className={styles.dayWeek}>воскресение</span>
          <span className={styles.date}>22 марта</span>
          <img
            width={78}
            height={71}
            src={iconCloudy}
            alt=""
          />
          <span className={styles.temperatureWeek}>+18</span>
        </div>
      </section>
    </div>
  );
}

export default WeatherWeek;
