import IconThunderstroms from '../../assets/pictures/icons/weather/thunderstroms.svg';
import IconSunny from '../../assets/pictures/icons/weather/sunny.svg'
import IconCloudy from '../../assets/pictures/icons/weather/cloudy.svg'
import IconClearСloudy from '../../assets/pictures/icons/weather/clear-cloudy.svg'
import IconDrizzle from '../../assets/pictures/icons/weather/drizzle.svg'
import IconRainSlight from '../../assets/pictures/icons/weather/RainSlight.svg'
import IconShowers from '../../assets/pictures/icons/weather/showers.svg'
import IconSnowFlurries from '../../assets/pictures/icons/weather/snow-flurries.svg'
import IconSleet from '../../assets/pictures/icons/weather/sleet.svg'
import IconSnow from '../../assets/pictures/icons/weather/snow.svg'

import styles from './WeatherToday.module.css';

function WeatherNow ({weatherCode}){
          
// Выводим в разметку изображения погоды на сегодняшний день 
    switch (weatherCode) {
      case 0:
        return (
          <img
            width={58}
            height={53}
            src={IconSunny}
            alt="Солнечно"
          />
        );
      case 1:
        return (
          <>
            <img
              width={58}
              height={53}
              src={IconClearСloudy}
              alt="мало облачно"
            />
            <p className={styles.PhenomenonContent}>Мало облачно</p>
          </>
        );
      case 2:
      case 3:
        return (
          <>
            <img
              width={58}
              height={53}
              src={IconCloudy}
              alt="Облачно"
            />
            <p className={styles.PhenomenonContent}>облачно</p>
          </>
        );
      case 51:
        return (
          <>
            <img
              width={58}
              height={53}
              src={IconDrizzle}
              alt="Моросящий дождь"
            />
            <p className={styles.PhenomenonContent}>облачно с прояснениеми</p>
          </>
        );
      case 53:
      case 55:
        return (
          <>
            <img
              width={58}
              height={53}
              src={IconShowers}
              alt="Сильно дождь"
            />
            <p className={styles.PhenomenonContent}>Сильно Моросящий дождь</p>
          </>
        );
      case 61:
        return (
          <>
            <img
              width={58}
              height={53}
              src={IconRainSlight}
              alt="Облачно с прояснениями"
            />
            <p className={styles.PhenomenonContent}>облачно с прояснениеми</p>
          </>
        );
      case 66:
        return (
          <>
            <img
              width={58}
              height={53}
              src={IconShowers}
              alt="Сильный холодный дождь"
            />
            <p className={styles.PhenomenonContent}>Сильный холодный дождь</p>
          </>
        );
      case 63:
        return (
          <>
            <img
              width={58}
              height={53}
              src={IconShowers}
              alt="Сильный холодный дождь"
            />
            <p className={styles.PhenomenonContent}>Сильный холодный дождь</p>
          </>
        );
      case 65:
      case 66:
        return (
          <>
            <img
              width={58}
              height={53}
              src={IconShowers}
              alt="Сильный холодный дождь"
            />
            <p className={styles.PhenomenonContent}>Сильный холодный дождь</p>
          </>
        );
      case 67:
        return (
          <>
            <img
              width={58}
              height={53}
              src={IconSleet}
              alt="Снег с дождем"
            />
            <p className={styles.PhenomenonContent}>Снег с дождем</p>
          </>
        );
      case 71:
        return (
          <>
            <img
              width={58}
              height={53}
              src={IconSnowFlurries}
              alt="Небольшой снег"
            />
            <p className={styles.PhenomenonContent}>Небольшой снег</p>
          </>
        );
      case 73:
      case 75:
        return (
          <>
            <img
              width={58}
              height={53}
              src={IconSnow}
              alt="Снегопад"
            />
            <p className={styles.PhenomenonContent}>Снегопад</p>
          </>
        );
      case 77:
        return (
          <>
            <img
              width={58}
              height={53}
              src={IconSnow}
              alt="Снежная крупа"
            />
            <p className={styles.PhenomenonContent}>Снежная крупа</p>
          </>
        );
      case 80:
        return (
          <>
            <img
              width={58}
              height={53}
              src={IconShowers}
              alt="Ливень"
            />
            <p className={styles.PhenomenonContent}>Ливень</p>
          </>
        );
      case 81:
      case 82:
        return (
          <>
            <img
              width={58}
              height={53}
              src={IconThunderstroms}
              alt="Ливень сильный"
            />
            <p className={styles.PhenomenonContent}>Ливень сильный</p>
          </>
        );
      case 85:
        return (
          <>
            <img
              width={58}
              height={53}
              src={IconSnowFlurries}
              alt="Слабый снегопад"
            />
            <p className={styles.PhenomenonContent}>Ливень сильный</p>
          </>
        );
      case 86:
        return (
          <>
            <img
              width={58}
              height={53}
              src={IconSnow}
              alt="Сильный снегопад"
            />
            <p className={styles.PhenomenonContent}>Ливень сильный</p>
          </>
        );
      default:
        return <div>Неизвестная погода</div>;
    }     
}

export default WeatherNow