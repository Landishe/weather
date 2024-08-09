import baseball from '../../assets/pictures/icons/Clothes/baseball.svg';
import sunglasses from '../../assets/pictures/icons/Clothes/sunglasses.svg'
import styles from './ClothesToday.module.css';

function ClothesData ({weatherCodes, sex}){
      console.log(sex)
      if (sex === 'female'){
            
            switch (weatherCodes) {
                case 0: return (
                  <>
                    <img src={baseball} alt="бейсболка"/>
                    <span className={styles.text}>Бейсболка</span>
                  </>
                )
            default: return null;
          }} else {
            switch (weatherCodes) {
              case 0: return (
                <>
                  <img src={sunglasses} alt="очки"/>
                  <span className={styles.text}>Бейсболка</span>
                </>
              )
          default: return null;
        }
          }  
      
}
export default ClothesData