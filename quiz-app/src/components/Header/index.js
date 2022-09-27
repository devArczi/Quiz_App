import React from 'react';
import { useNavigate } from 'react-router-dom';
import cofnij_x from '../../assets/cofnij_x.svg';
import zamknij_x from '../../assets/zamknij_x.png';

const Header = () => {
    const navigate = useNavigate();
    return(
        <div className="navigation__wrapper">  
            <button className="navigation__button-1" onClick={()=>navigate(-1)}>
                <img src={cofnij_x} alt="img"></img>
            </button>  
            <h1>QUIZ</h1>         
            <button className='navigation__button-2' onClick={()=>navigate("/")}>
                <img src={zamknij_x} alt="img"></img>
            </button>
        </div>
    )
}

export default Header;