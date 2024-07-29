import BoxIconFemale from "./Female"
import BoxIconMale from "./Male"
import styles from './ClothesToday.module.css';

function Togle({onClick, weatherData}){

    return (
        <>
            <div onClick={onClick}>
                <BoxIconFemale className={styles.iconFemale} />
                    <input
                        className={styles.female}
                        type="radio"
                        name="sex"
                        id="female"
                    />
                </div>
            <div onClick={onclick}>
                <BoxIconMale className={styles.iconMale} />
                    <input
                        className={styles.male}
                        id="male"
                        type="radio"
                        name="sex"
                        checked
                    />
            </div>
        </>
    )
    
}

export default Togle