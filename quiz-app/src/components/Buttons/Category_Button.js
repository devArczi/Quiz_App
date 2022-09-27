import React from 'react';
import { Link } from 'react-router-dom';


const Category_Button = (props) =>{


    return(
        <div>
            <button onClick={()=>{localStorage.setItem("category", props.header);localStorage.setItem("category_img", props.img)}} className={props.button}>
                <Link to='/Category'>
                    <img src={props.img} alt="img"/>
                    <br/>
                    <h3>{props.header}</h3>
                </Link>
            </button>
        </div>
    )
}

export default Category_Button;