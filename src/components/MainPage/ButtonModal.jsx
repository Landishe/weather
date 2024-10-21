import { useState } from "react"
import ModalWindow from "./ModalWindow"
import styles from './MainPage.module.css';

function ButtonModal ({cities, handleCitySelect, selectedCity }){

   const[modalActive, setModalActive] = useState(false)
    return(
    <>
        <div>
            <button className={styles.btnChangeCity} onClick={() => setModalActive(true)}>{selectedCity}</button> 
            <ModalWindow active={modalActive} setActive={setModalActive} cities={cities} handleCitySelect = {handleCitySelect} />
        </div>
    </>
    )
}

export default ButtonModal