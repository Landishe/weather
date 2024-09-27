import styles from './MainPage.module.css';
import city from '../../assets/pictures/icons/city.svg';
import ButtonModal from './ButtonModal';
import { weatherApi } from '../../utils/api.js';
import { useState, useEffect } from 'react';
import WeatherToday from '../WeatherToday/WeatherToday.jsx';
import WeatherWeek from '../WeatherWeek/WeatherWeek.jsx';
import ClothesToday from '../ClothesToday/ClothesToday.jsx';
import './weather_image.css';

function MainPage() {
  const [selectedCity, setSelectedCity] = useState('Санкт-Петербург');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [cityWeather, setCityWeather] = useState();
  const [loading, setLoading] = useState(true);
  // Массив для отображения городов и поска объекта с погодой на определенный город
  const cities = [
    { name: 'Москва', location_id: '' },
    { name: 'Санкт-Петербург', location_id: 1 },
    { name: 'Екатеринбург', location_id: 2 },
    { name: 'Краснодар', location_id: 3 },
    { name: 'Новосибирск', location_id: 4 },
  ];

  useEffect(() => {
    const weatherApiAsynchronic = async () => {
      try {
        setIsLoading(true);
        const weatherFetched = await weatherApi();
        setWeatherData(weatherFetched);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        setErr('Ошибка при загрузке данных не пришели данные.');
      } finally {
        setIsLoading(false);
      }
    };
    weatherApiAsynchronic();
  }, [selectedCity]);
  // Поиск города в массиве городов с погодой опредленного города с ключем
  useEffect(() => {
    const selectedCityData = cities.find((city) => city.name === selectedCity);
    if (selectedCityData) {
      const locationId = selectedCityData.location_id;
      if (weatherData) {
        // Москва без id поэтому проверяется пустая строка
        if (locationId === '') {
          const cityWeather = weatherData[0];
          setCityWeather(cityWeather);
          setLoading(false);
        } else {
          const cityWeather = weatherData.find(
            (data) => data.location_id === locationId
          );
          setCityWeather(cityWeather);
          console.log(cityWeather);
          setLoading(false);
        }
      }
    }
  }, [selectedCity, weatherData]);

  const handleCitySelect = (event) => {
    setSelectedCity(event.target.innerHTML);
  };

  if (isLoading) {
    return <div></div>;
  } else if (err) {
    return <div>Произошла ошибка: {err}</div>;
  } else if (loading) {
    return <div className={styles.isLoading}>Загрузка данных</div>;
  } else {
    return (
      <div
        className={
          cityWeather.current.weather_code === 0
            ? 'weatherImageSunny'
            : cityWeather.current.weather_code === 3
            ? 'weatherImageCloudy'
            : cityWeather.current.weather_code >= 61
            ? 'weatherImageRain'
            : cityWeather.current.weather_code >= 71
            ? 'weatherImageSnowy'
            : 'weatherImageStorm'
        }>
        <div className={styles.titlePage}>
          <div className={styles.cityBlock}>
            <div className={styles.city}>
              <div className={styles.cityChange}>
                <img
                  src={city}
                  alt=""
                />
              </div>
              <ButtonModal
                cities={cities}
                handleCitySelect={handleCitySelect}
                selectedCity={selectedCity}
              />
            </div>
            <div className={styles.allBlocks}>
              {cityWeather && <WeatherToday weatherData={cityWeather} />}
              {cityWeather && (
                <ClothesToday weatherData={cityWeather.current} />
              )}
              {cityWeather && <WeatherWeek weatherData={cityWeather.daily} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
