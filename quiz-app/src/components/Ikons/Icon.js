import React from 'react';


const Icon = (props) =>{
    return(
        <div className="category__icon">
            <img src={props.img} alt="img"/>   
            <h3>{props.header}</h3>                             
        </div>
    )
}

export default Icon;