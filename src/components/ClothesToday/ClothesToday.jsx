import styles from './ClothesToday.module.css';
import { useState } from 'react';
import '../../global.css';
import Togle from './Toggle';
import ClothesData from './ClothesData.jsx';

function ClothesToday({ weatherData }) {
  const [selectedSex, setSelectedSex] = useState('male');

  const handleSexChange = (sex) => {
    setSelectedSex(sex);
    
  };

  return (
    <section className="all-section">
      <div className={styles.titel}>
        <div className={styles.clothesOfWeather}>
          <span> Одежда по погоде </span>
          <div className={styles.sex}>
            <Togle onChange={handleSexChange}/>
          </div>
        </div>
        <ClothesData selectedSex={selectedSex} weatherCodes={weatherData}/>
      </div>
    </section>
  );
}

export default ClothesToday;
