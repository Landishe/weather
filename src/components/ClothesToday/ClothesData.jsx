import baseball from '../../assets/pictures/icons/Clothes/baseball.svg';
import sleeveless_blouse from '../../assets/pictures/icons/Clothes/sleeveless_blouse.svg';
import sunglasses from '../../assets/pictures/icons/Clothes/sunglasses.svg';
import skirt from '../../assets/pictures/icons/Clothes/skirt.svg';
import sandals from '../../assets/pictures/icons/Clothes/sandals.svg';
import short from '../../assets/pictures/icons/Clothes/shorts.svg';
import casuale_t_shirt from '../../assets/pictures/icons/Clothes/casual_t_shirt.svg';
import neckline_dress from '../../assets/pictures/icons/Clothes/neckline_dress.svg';
import high_heels from '../../assets/pictures/icons/Clothes/high_heels.svg';
import pants from '../../assets/pictures/icons/Clothes/pants.svg';
import coat from '../../assets/pictures/icons/Clothes/coat.svg';
import high_heels_boots from '../../assets/pictures/icons/Clothes/high_heel_boots.svg';
import socks from '../../assets/pictures/icons/Clothes/socks.svg';
import noun_umbrella from '../../assets/pictures/icons/Clothes/noun-umbrella.svg';
import rain_coat from '../../assets/pictures/icons/Clothes/rain_coat.svg';
import jacket from '../../assets/pictures/icons/Clothes/jacket.svg';
import male_boots from '../../assets/pictures/icons/Clothes/male_boots.svg';
import sweater from '../../assets/pictures/icons/Clothes/sweater.svg';
import styles from './ClothesToday.module.css';

function ClothesData({ weatherCodes, selectedSex }) {
  const item = { disabled: false };
  if (selectedSex === 'female') {
    console.log(weatherCodes);
    if (weatherCodes.temperature_2m >= 20 || weatherCodes.weather_code === 65) {
      return (
        <ul className={styles.clothes}>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${baseball})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {'Кепка '}
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${sunglasses})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {'Солнечные Очки '}
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${sleeveless_blouse})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {'Майка '}
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${skirt})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {'Юбка '}
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${sandals})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {'Сандали '}
          </li>
        </ul>
      );
    } else if (
      weatherCodes.temperature_2m >= 15 ||
      weatherCodes.weather_code === 65
    ) {
      return (
        <ul className={styles.clothes}>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${sunglasses})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {'Солнечные Очки '}
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${neckline_dress})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {'Платье '}
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${baseball})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {'Кепка '}
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${skirt})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {'Юбка '}
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${high_heels})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {'Туфли '}
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${sleeveless_blouse})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {'Майка '}
          </li>
        </ul>
      );
    } else if (
      weatherCodes.temperature_2m >= 5 ||
      weatherCodes.weather_code === 65
    ) {
      return (
        <ul className={styles.clothes}>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${coat})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {'Пальто '}
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${rain_coat})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {'Худи '}
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${pants})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {'Штаны '}
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${socks})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Носки теплые
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${high_heels_boots})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Высокие сапоги
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${noun_umbrella})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Зонт
          </li>
        </ul>
      );
    } else if (weatherCodes.temperature_2m >= -5) {
      return (
        <ul className={styles.clothes}>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${coat})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Пальто
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${sweater})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {'Кофта '}
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${sleeveless_blouse})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {'Футболка'}
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${pants})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Штаны
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${socks})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Носки теплые
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${high_heels_boots})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Высокие сапоги
          </li>
        </ul>
      );
    }
  }
  if (selectedSex === 'male') {
    if (weatherCodes.temperature_2m >= 20 || weatherCodes.weather_code === 65) {
      return (
        <ul className={styles.clothes}>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${baseball})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Кепка
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${sunglasses})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Солнечные Очки
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${sleeveless_blouse})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Майка
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${short})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Шорты
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${sandals})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Сандали
          </li>
        </ul>
      );
    } else if (
      weatherCodes.temperature_2m >= 15 ||
      weatherCodes.weather_code === 65
    ) {
      return (
        <ul className={styles.clothes}>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${sunglasses})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Солнечные Очки
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${sweater})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {'Кофта '}
            Платье
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${baseball})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Кепка
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${pants})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {'Штаны'}
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${male_boots})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {'Туфли '}
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${casuale_t_shirt})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {'Футболка '}
          </li>
        </ul>
      );
    } else if (
      weatherCodes.temperature_2m >= 5 ||
      weatherCodes.weather_code === 65
    ) {
      return (
        <ul className={styles.clothes}>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${jacket})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {'Куртка '}
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${rain_coat})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {'Худи '}
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${casuale_t_shirt})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Футболка
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${pants})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Штаны
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${male_boots})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Ботинки
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${noun_umbrella})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Зонт
          </li>
        </ul>
      );
    } else if (weatherCodes.temperature_2m >= -5) {
      return (
        <ul className={styles.clothes}>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${coat})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Пальто
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${rain_coat})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Худи
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${sleeveless_blouse})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Футболка
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${pants})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Штаны
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${socks})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Носки теплые
          </li>
          <li
            style={{
              opacity: item.disabled ? 0 : 1,
              backgroundImage: `url(${male_boots})`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: '45px',
              paddingTop: '10px',
            }}>
            {' '}
            Ботинки
          </li>
        </ul>
      );
    }
  }
}
export default ClothesData;
