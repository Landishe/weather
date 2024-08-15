import { useEffect, useState } from 'react';
import { weatherApi } from '../../utils/api.js'
import styles from './WeatherToday.module.css';
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
import '../MainPage/all-section.css';


function WeatherToday() {
  const [weatherData, setWeatherData] = useState('null');
  const [isLoading, setIsLoading] = useState(true)
  const [err, setErr] = useState('данные не загружены')

  const dateNow = () => {
    const date = new Date()
    let formaterDate = new Intl.DateTimeFormat('ru',{
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      hour: 'numeric',
      minute: 'numeric'
    })
    console.log(formaterDate.format(date));
    return formaterDate.format(date);
  }
  
  
  useEffect (() => {
    const waetherApiAsync = async() => {
      try{
        setIsLoading(true);
        const weateherFetched = await weatherApi();
        setWeatherData(weateherFetched)
      }catch(err){
        console.log(err)
      }finally{
        setIsLoading(false)
      }
      
    };
      waetherApiAsync();
  }, []);

  const weatherCodes = () => {
    if (weatherData && weatherData.current) {
      const weatherCode = weatherData.current.weather_code;
      console.log(weatherCode)
      switch (weatherCode) {
        case 0: 
          return <img width={58} height={53} src={IconSunny} alt="Солнечно" /> 
        case 1:
          return (
              <>
                <img width={58} height={53} src={IconClearСloudy} alt="мало облачно" />
                <p className={styles.PhenomenonContent}>Мало облачно</p>
              </>
          )    
        case 2:  
        case 3: 
          return(
            <>
              <img width={58} height={53} src={IconCloudy} alt="Облачно" />
              <p className={styles.PhenomenonContent}>облачно</p>
            </>
        ) 
        case 51: 
          return (
            <>
              <img width={58} height={53} src={IconDrizzle} alt="Моросящий дождь" />
              <p className={styles.PhenomenonContent}>облачно с прояснениеми</p>
            </>
        ) 
        case 53:
        case 55:
          return (
            <>
              <img width={58} height={53} src={IconShowers} alt="Сильно дождь" />
              <p className={styles.PhenomenonContent}>Сильно Моросящий дождь</p>
            </>
        )        
        case 61:
          return (
            <>
              <img width={58} height={53} src={IconRainSlight} alt="Облачно с прояснениями" />
              <p className={styles.PhenomenonContent}>облачно с прояснениеми</p>
            </>
        )
        case 65:            
        case 66:
          return (
            <>
              <img width={58} height={53} src={IconShowers} alt="Сильный холодный дождь" />
              <p className={styles.PhenomenonContent}>Сильный холодный дождь</p>
            </>
        )
        case 67:
          return (
            <>
              <img width={58} height={53} src={IconSleet} alt="Снег с дождем" />
              <p className={styles.PhenomenonContent}>Снег с дождем</p>
            </>
        )
        case 71:
          return (
            <>
              <img width={58} height={53} src={IconSnowFlurries} alt="Небольшой снег" />
              <p className={styles.PhenomenonContent}>Небольшой снег</p>
            </>
        )
        case 73:
        case 75:
          return (
            <>
              <img width={58} height={53} src={IconSnow} alt="Снегопад" />
              <p className={styles.PhenomenonContent}>Снегопад</p>
            </>
        )
        case 77:
          return (
            <>
              <img width={58} height={53} src={IconSnow} alt="Снежная крупа" />
              <p className={styles.PhenomenonContent}>Снежная крупа</p>
            </>
        )
        case 80:
          return (
            <>
              <img width={58} height={53} src={IconShowers} alt="Ливень" />
              <p className={styles.PhenomenonContent}>Ливень</p>
            </>
        )
        case 81:
        case 82:
            return (
            <>
            <img width={58} height={53} src={IconThunderstroms} alt="Ливень сильный" />
            <p className={styles.PhenomenonContent}>Ливень сильный</p>
            </>
        )
        case 85:
            return (
            <>
            <img width={58} height={53} src={IconSnowFlurries} alt="Слабый снегопад" />
            <p className={styles.PhenomenonContent}>Ливень сильный</p>
            </>
        )
        case 86:
            return (
            <>
            <img width={58} height={53} src={IconSnow} alt="Сильный снегопад" />
            <p className={styles.PhenomenonContent}>Ливень сильный</p>
            </>
        )
        default:
          return <div>Неизвестная погода</div>;
        }
      } else {
        return <div>Данные о погоде не загружены</div>;
      }
    };
    

  if (isLoading){
    return <div className={styles.isLoading}/>
  } else {
  return (
    <div className="all-section">
      <section className={styles.weatherToday}>
        <div className={styles.date}>
          <span>{dateNow()}</span>
        </div>
        <div className={styles.weatherNow}>
          <div className={styles.weather}>
            <p className={styles.temperature}>{weatherData.current.temperature_2m}</p>
            <div className={styles.weatherPhenomenon}>
              {weatherCodes()}
            </div>
          </div>
          <div className={styles.feltWeather}>
            <p >{`ощущется как ` + weatherData.current.apparent_temperature}</p>
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
            <p className={styles.windSpeed}>{weatherData.current.wind_speed_10m}</p>
            <p className={styles.windSpeed}>{weatherData.current_units.wind_speed_10m}</p>
          </div>
          <div className={styles.pressure}>
            <img
              width={26}
              height={26}
              src={Iconhumidity}
              alt="влажность"
            />
            <p className={styles.persent}>{weatherData.current.relative_humidity_2m + ` %`}</p>
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
}

export default WeatherToday;
