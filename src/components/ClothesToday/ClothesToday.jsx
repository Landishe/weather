import styles from './ClothesToday.module.css';
import winter_hat from '../../assets/pictures/icons/Clothes/winter_hat.svg';
import hoddie from '../../assets/pictures/icons/Clothes/hoddie.svg';
import scarf from '../../assets/pictures/icons/Clothes/scarf.svg';
import pants from '../../assets/pictures/icons/Clothes/pants.svg';
import jacet from '../../assets/pictures/icons/Clothes/jacket.svg';
import baseball from '../../assets/pictures/icons/Clothes/baseball.svg';
import male_boots from '../../assets/pictures/icons/Clothes/male_boots.svg';
import '../MainPage/all-section.css';
import Togle from './Togle';
import BoxIconFemale from './Female';




function ClothesToday({weatherData, togle}) {
    
  return (
    <section className="all-section">
      <div className={styles.titel}>
        <div className={styles.clothesOfWeather}>
          <span>Одежда по погоде</span>
          <div className={styles.sex}>
            <Togle onClick={togle} />
          </div>
        </div>
        <div className={styles.clothes}>
            <div>
              <BoxIconFemale weatherCodes={weatherData} />
            </div>
            <div>
              <img
                src={jacet}
                alt="крутка"
              />
              <span className={styles.text}>Худи</span>
            </div>
            <div>
              <img
                src={scarf}
                alt="Шарф"
              />
              <span className={styles.text}>Шарф</span>
            </div>
            <div>
              <img
                src={pants}
                alt="Джинсы"
              />
              <span className={styles.text}>Джинсы</span>
            </div>
            <div>
              <img
                src={hoddie}
                alt="Куртка"
              />
              <span className={styles.text}>Теплая куртка</span>
            </div>
            <div>
              <img
                src={male_boots}
                alt="Обувь"
              />
              <span className={styles.text}>Ботинки</span>
            </div>
          </div>
      </div>
    </section>
  );
}

export default ClothesToday;