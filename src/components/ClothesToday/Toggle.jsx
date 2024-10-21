import BoxIconFemale from './Female';
import BoxIconMale from './Male';
import styles from './ClothesToday.module.css';
import { useState } from 'react';

function Togle({ onChange }) {
  const [selectedSex, setSelectedSex] = useState('male');

  const hundleRadioChange = (event) => {
    setSelectedSex(event.target.value);
    onChange(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <BoxIconFemale
        className={styles.iconFemale}
        female={selectedSex}
      />
      <input
        className={styles.female}
        id="female"
        type="radio"
        name="sex"
        value={'female'}
        checked={selectedSex === 'female'}
        onChange={hundleRadioChange}
      />
      <BoxIconMale className={styles.iconMale} />
      <input
        className={styles.male}
        id="male"
        type="radio"
        name="sex"
        value={'male'}
        checked={selectedSex === 'male'}
        onChange={hundleRadioChange}
      />
    </>
  );
}

export default Togle;
