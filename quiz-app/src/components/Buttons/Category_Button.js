import React from 'react';
import { Link } from 'react-router-dom';


const Category_Button = (props) =>{


    return(
        <div>
            <Link to='/Category'>
            <button onClick={()=>{localStorage.setItem("category", props.header);localStorage.setItem("category_img", props.img)}} className={props.button}>
                <img src={props.img} alt="img"/>
                <h3>{props.header}</h3>
            </button>
            </Link>
        </div>
    )
}

export default Category_Button;