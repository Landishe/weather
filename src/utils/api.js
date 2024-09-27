export async function weatherApi(){
    try {
      const response = await fetch ('https://api.open-meteo.com/v1/forecast?latitude=55.7522,59.9386,56.7431,45.0448,55.0415&longitude=37.6156,30.3141,60.8027,38.976,82.9346&current=temperature_2m,relative_humidity_2m,apparent_temperature,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,rain_sum,showers_sum,snowfall_sum&wind_speed_unit=ms');
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Ошибка получения данных')
      throw error;
    }
  };

/*
Новый запрос
https://api.open-meteo.com/v1/forecast?latitude=55.7522,59.9386,56.7431,45.0448,55.0415&longitude=37.6156,30.3141,60.8027,38.976,82.9346&current=temperature_2m,relative_humidity_2m,apparent_temperature,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,rain_sum,showers_sum,snowfall_sum&wind_speed_unit=ms
*/