import styles from './WeatherWeek.module.css'
import { useEffect, useState } from 'react';
import { weatherApi } from '../../utils/api.js'


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

function WeatherCode({weatherImage}) {
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState(null)

    useEffect(() => {
        const weatherApiAsynchronic = async () => {
        try {
            setIsLoading(true);
            const weatherFetched = await weatherApi();
            setWeatherData(weatherFetched);
        } catch (error) {
            console.error("Ошибка при загрузке данных:", error);
            setErr("Ошибка при загрузке данных.");
        } finally {
            setIsLoading(false);
        }
        }; weatherApiAsynchronic();
    }, []);

    const isWeatherCode = weatherData?.current?.weather_code
    
    const weatherCodes = () => { 
       
        if (isWeatherCode !== undefined) {  
                switch (isWeatherCode) {
                case 0: return <img width={58} height={53} src={IconSunny} alt="Солнечно" /> ;
                case 1: return <img width={58} height={53} src={IconClearСloudy} alt="мало облачно" />;
                case 2:  
                case 3: return <img width={58} height={53} src={IconCloudy} alt="Облачно" />;
                case 51: return <img width={58} height={53} src={IconDrizzle} alt="Моросящий дождь" />;
                case 55: return <img width={58} height={53} src={IconShowers} alt="Сильно дождь" />;
                case 61: return <img width={58} height={53} src={IconRainSlight} alt="Облачно с прояснениями" />;
                case 65:            
                case 66: return <img width={58} height={53} src={IconShowers} alt="Сильный холодный дождь" />;
                case 67: return <img width={58} height={53} src={IconSleet} alt="Снег с дождем" />;
                case 71: return <img width={58} height={53} src={IconSnowFlurries} alt="Небольшой снег" />;
                case 73:
                case 75: return <img width={58} height={53} src={IconSnow} alt="Снегопад" />;
                case 77: return <img width={58} height={53} src={IconSnow} alt="Снежная крупа" />;
                case 80: return <img width={58} height={53} src={IconShowers} alt="Ливень" />;
                case 81:
                case 82: return <img width={58} height={53} src={IconThunderstroms} alt="Ливень сильный" />;
                case 85: return <img width={58} height={53} src={IconSnowFlurries} alt="Слабый снегопад" />;
                case 86: return <img width={58} height={53} src={IconSnow} alt="Сильный снегопад" />;
                default: return null;
                }} else{
                    return null
                }
            }

    

    if (isLoading) {
        return <div className={styles.isLoading}></div>
    } else if (err) {
            return <div>Произошла ошибка: {err}</div>;
    } else {
        let weatherImage = weatherCodes()
        // console.log(weatherImage)
        console.log(weatherImage.props)
    return (
        
        <div weatherCodes={weatherCodes}></div> 
        
    );
}}

export default WeatherCode