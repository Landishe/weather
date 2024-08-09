import styles from './MainPage.module.css';
import WeatherToday from '../WeatherToday/WeatherToday';
import WeatherData from './WeatherData';
import city from '../../assets/pictures/icons/city.svg';


function MainPage() {

  return (
    <div className={styles.titlePage}>
      <div className={styles.cityBlock}>
        <div className={styles.city}>
          <div className={styles.cityChange}>
            <img
              src={city}
              alt=""
            />
          </div>
          <span>санкт-петербург</span>
        </div>
        <div className={styles.allBlocks}>
          <WeatherToday />
          <WeatherData />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
