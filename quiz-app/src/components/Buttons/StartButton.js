import React from 'react';
import strzalka from "../../assets/button_strzałka_plus.svg"


const StartButton = (props) =>{
    return(
        <div className="container__button container__button--start container__button--repeat">     
            <button>
                <div><h1>{props.content}</h1></div>
                <div><img src={strzalka} alt="img"/></div>                               
            </button>   
        </div>
    )
}

export default StartButton;