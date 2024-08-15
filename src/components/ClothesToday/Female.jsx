import React, { FC } from "react";
import { useState } from 'react';
import baseball from '../../assets/pictures/icons/Clothes/baseball.svg';
import styles from './ClothesToday.module.css';
import ClothesData from './ClothesData';


export const BoxIconFemale = ({weatherCodes, ...props }) => {
  console.log(weatherCodes)
  
  const [click, setClick] = useState(false)
  
  
  const clicksWoman = () => {
    if (click !== true){
      setClick(true)
      console.log("клик сработал");
      console.log(click);
    }else {
      console.log('клик не сработал')
      console.log(click);
      setClick(false)
    }}

  return (
    
    
    <>
    
      <div>
        <svg
            onClick={clicksWoman}
            {...props}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 5.5C9.99999 4.53241 9.71923 3.58562 9.19177 2.77444C8.66432 1.96326 7.91283 1.32254 7.02844 0.930006C6.14406 0.537468 5.16477 0.409968 4.20936 0.562971C3.25395 0.715973 2.36345 1.1429 1.64588 1.79199C0.928298 2.44107 0.414468 3.28441 0.166703 4.21974C-0.0810625 5.15506 -0.0521182 6.14219 0.250025 7.06139C0.552169 7.98059 1.11453 8.79238 1.86891 9.3983C2.62328 10.0042 3.53726 10.3782 4.5 10.475V12H2.5C2.36739 12 2.24022 12.0527 2.14645 12.1464C2.05268 12.2402 2 12.3674 2 12.5C2 12.6326 2.05268 12.7598 2.14645 12.8536C2.24022 12.9473 2.36739 13 2.5 13H4.5V14.5C4.5 14.6326 4.55268 14.7598 4.64645 14.8536C4.74021 14.9473 4.86739 15 5 15C5.13261 15 5.25979 14.9473 5.35355 14.8536C5.44732 14.7598 5.5 14.6326 5.5 14.5V13H7.5C7.63261 13 7.75979 12.9473 7.85355 12.8536C7.94732 12.7598 8 12.6326 8 12.5C8 12.3674 7.94732 12.2402 7.85355 12.1464C7.75979 12.0527 7.63261 12 7.5 12H5.5V10.475C6.73272 10.3496 7.87515 9.77148 8.70635 8.85254C9.53755 7.9336 9.99848 6.73909 10 5.5ZM1 5.5C1 4.70888 1.2346 3.93552 1.67412 3.27772C2.11365 2.61992 2.73836 2.10723 3.46927 1.80448C4.20017 1.50173 5.00444 1.42252 5.78036 1.57686C6.55629 1.7312 7.26902 2.11216 7.82843 2.67157C8.38784 3.23098 8.7688 3.94372 8.92314 4.71964C9.07748 5.49556 8.99827 6.29983 8.69552 7.03073C8.39277 7.76164 7.88008 8.38635 7.22228 8.82588C6.56448 9.2654 5.79113 9.5 5 9.5C3.93949 9.49884 2.92275 9.07704 2.17285 8.32715C1.42296 7.57725 1.00116 6.56051 1 5.5Z"
              fill="currentColor"
            />
        </svg>
      </div>
      {click && <ClothesData weatherCodes={weatherCodes} clicksWoman={true}/>}
    </>
  );
};

export default BoxIconFemale;