import styles from "./TitlePage.module.css";
import WeatherToday from "./WeatherToday";

// предлагаю переименовать в MainPage or HomePage
function TitlePage() {
  return (
    <div className={styles.titlePage}>
      {/* достаточно написать просто <WeatherToday/> */}
      <WeatherToday></WeatherToday>
    </div>
  );
}

export default TitlePage;
