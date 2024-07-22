import { useState } from "react"
import baseball from '../../assets/pictures/icons/Clothes/baseball.svg';
import styles from './ClothesToday.module.css';

function ClothesData ({weatherCodes, clicksWoman}){
      
    const clothesData = () =>{
        if (weatherCodes){
            console.log('component ClothesData')
            switch(weatherCodes){
              case 0: return (
                  <>
                    <img src={baseball} alt="бейсболка"/>
                    <span className={styles.text}>Бейсболка</span>
                  </>
              )
          }}
    }
    
    return <ClothesData>{clothesData()}</ClothesData>
  
}
export default ClothesData