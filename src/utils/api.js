import { useEffect, useState } from 'react';

function Weather() {
  
  const [data, setData] = useState('null');

  useEffect =
    (() => {
      fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=59.9386&longitude=30.3141&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,wind_speed_10m,wind_direction_10m&daily=temperature_2m_max,rain_sum,showers_sum,snowfall_sum&wind_speed_unit=ms&timezone=Europe%2FMoscow'
      )
        .then((Response) => JSON.parse(Response))
        .then((Response) => setData(Response));
    },
    []);

  console.log(data);
  return <h1>{data}</h1>;
}

export default Weather;
