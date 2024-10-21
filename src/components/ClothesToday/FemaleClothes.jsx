import baseball from '../../assets/pictures/icons/Clothes/baseball.svg';
import sleeveless_blouse from '../../assets/pictures/icons/Clothes/sleeveless_blouse.svg';
import sunglasses from '../../assets/pictures/icons/Clothes/sunglasses.svg';
import skirt from '../../assets/pictures/icons/Clothes/skirt.svg';
import sandals from '../../assets/pictures/icons/Clothes/sandals.svg';
import scarf from '../../assets/pictures/icons/Clothes/scarf.svg';
import neckline_dress from '../../assets/pictures/icons/Clothes/neckline_dress.svg';
import high_heels from '../../assets/pictures/icons/Clothes/high_heels.svg';
import pants from '../../assets/pictures/icons/Clothes/pants.svg';
import coat from '../../assets/pictures/icons/Clothes/coat.svg';
import high_heels_boots from '../../assets/pictures/icons/Clothes/high_heel_boots.svg';
import socks from '../../assets/pictures/icons/Clothes/socks.svg';
import noun_umbrella from '../../assets/pictures/icons/Clothes/noun-umbrella.svg';
import rain_coat from '../../assets/pictures/icons/Clothes/rain_coat.svg';
import styles from './ClothesToday.module.css';

function FemaleClothes({ weatherCodes }) {
  const item = { disabled: false };

  if (weatherCodes.temperature_2m >= 20) {
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
            backgroundImage: `url(${skirt})`,
            backgroundRepeat: 'no-repeat',
            paddingLeft: '45px',
            paddingTop: '10px',
          }}>
          {' '}
          Юбка
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
        <li
          style={{
            opacity: item.disabled ? 0 : 1,
            backgroundImage: `url(${
              weatherCodes === 65 ? noun_umbrella : item
            })`,
            backgroundRepeat: 'no-repeat',
            paddingLeft: '45px',
            paddingTop: '10px',
          }}>
          {' '}
          {weatherCodes === 65 ? 'Зонт' : item}
        </li>
      </ul>
    );
  } else if (weatherCodes.temperature_2m >= 15) {
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
            backgroundImage: `url(${neckline_dress})`,
            backgroundRepeat: 'no-repeat',
            paddingLeft: '45px',
            paddingTop: '10px',
          }}>
          {' '}
          Платье
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
            backgroundImage: `url(${high_heels})`,
            backgroundRepeat: 'no-repeat',
            paddingLeft: '45px',
            paddingTop: '10px',
          }}>
          {' '}
          Туфли
        </li>
        <li
          style={{
            opacity: item.disabled ? 0 : 1,
            backgroundImage: `url(${
              weatherCodes === 65 ? noun_umbrella : skirt
            })`,
            backgroundRepeat: 'no-repeat',
            paddingLeft: '45px',
            paddingTop: '10px',
          }}>
          {' '}
          {weatherCodes === 65 ? 'Зонт' : 'Юбка'}
        </li>
      </ul>
    );
  } else if (weatherCodes.temperature_2m >= 5) {
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
          Толстовка
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
            backgroundImage: `url(${
              weatherCodes === 65 ? noun_umbrella : scarf
            })`,
            backgroundRepeat: 'no-repeat',
            paddingLeft: '45px',
            paddingTop: '10px',
          }}>
          {' '}
          {weatherCodes === 65 ? 'Зонт' : 'Шарф'}
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
          Толстовка
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
            backgroundImage: `url(${
              weatherCodes === 65 ? noun_umbrella : scarf
            })`,
            backgroundRepeat: 'no-repeat',
            paddingLeft: '45px',
            paddingTop: '10px',
          }}>
          {' '}
          {weatherCodes === 65 ? 'Зонт' : 'Шарф'}
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

export default FemaleClothes;
