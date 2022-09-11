import React from 'react';
import strzalka from "../../assets/button_strzałka_plus.svg"


const StartButton = () =>{
    return(
        <div className="container__button container__button--start">     
            <button>
                <div><h1>Rozpocznij</h1></div>
                <div><img src={strzalka} alt="img"/></div>                               
            </button>   
        </div>
    )
}

export default StartButton;