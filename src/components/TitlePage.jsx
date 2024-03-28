import styles from './TitlePage.module.css';
import WeatherToday from './WeatherToday';

function TitlePage() {
  return (
    <div className={styles.titlePage}>
      <WeatherToday></WeatherToday>
    </div>
  );
}

export default TitlePage;
