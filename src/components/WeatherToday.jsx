import styles from "./WeatherToday.module.css";
import IconWeather from "./ico/stormy.svg";
import IconWind from "./ico/wind.svg";
import IconPressure from "./ico/pressure.svg";
import IconHumidity from "./ico/humidity.svg";

function WeatherToday() {
  return (
    //стили пишем с маленькой буквы
    <section className={styles.WeatherToday}>
      <span className={styles.date}>тут дата</span>
      <div className={styles.weatherNow}>
        <div className={styles.weather}>
          <p className={styles.temperature}>+18</p>
          <div className={styles.weatherPhenomenon}>
            <img
              width={58}
              height={53}
              src={IconWeather}
              alt="ощущение погоды"
            />
            {/* здесь должно быть расстояние между иконкой и картинкой */}
            <p className={styles.weatherPhenomenonContent}>гроза</p>
          </div>
        </div>
        <p className={styles.feltWeather}>ощущается как +10</p>
      </div>
      <div className={styles.weatherParams}>
        <div className={styles.weatherParamsWind}>
          <img width={26} height={26} src={IconWind} alt="скорость ветра" />
          <p className={styles.weatherParamsWindSpeed}>2.5 м/с Ю</p>
        </div>
        <div className={styles.weatherParamsPressure}>
          <img width={26} height={26} src={IconPressure} alt="влажность" />
          {/* орфографическая ошибка установи cSpell плагин */}
          <p className={styles.weatherParamsPressurePersent}>87%</p>
        </div>
        <div className={styles.weatherParamsHumidity}>
          <img
            width={26}
            height={26}
            src={IconHumidity}
            alt="давление мм рт. столба"
          />
          {/* текст отображается полупрозрачным. Должен быть просто белым */}
          <p className={styles.weatherParamsHumidityText}>764 мм рт. ст.</p>
        </div>
      </div>
    </section>
  );
}

export default WeatherToday;
