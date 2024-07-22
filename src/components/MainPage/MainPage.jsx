import styles from './TitlePage.module.css';
import WeatherToday from '../WeatherToday/WeatherToday';
import ClothesToday from '../ClothesToday/ClothesToday';

import city from '../../assets/pictures/icons/city.svg';
import WeatherData from '../WeatherWeek/WeatherData';
import WeatherDataClothes from '../ClothesToday/WeatherDataClothes';

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
          <WeatherDataClothes />
          <WeatherData />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
