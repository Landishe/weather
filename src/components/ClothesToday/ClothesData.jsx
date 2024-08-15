import baseball from '../../assets/pictures/icons/Clothes/baseball.svg';
import styles from './ClothesToday.module.css';

function ClothesData ({weatherCodes, clicksWoman, clicksMan}){
      console.log(weatherCodes)
      console.log(clicksWoman)
      if (clicksWoman && clicksMan){
            
            switch (weatherCodes) {
                case 0: return (
                  <>
                    <img src={baseball} alt="бейсболка"/>
                    <span className={styles.text}>Бейсболка</span>
                  </>
                )
            default: return null;
          }}  
      
}
export default ClothesData