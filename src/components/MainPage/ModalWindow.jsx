
import styles from './MainPage.module.css';
import './modal.css';

  
function ModalWindow({ active, setActive, handleCitySelect, cities }) {

  return (
    <div
      className={active ? 'modal active' : 'modal' } onClick={() => setActive(false)}>
      <div
        className={active ? 'modalWindow active': 'modalWindow'} onClick={(e) => e.stopPropagation() }>
        {cities.map((city) => (<button className={styles.btnCity}
            key={city.location_id}
            onClick={handleCitySelect}>
            {city.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ModalWindow;
