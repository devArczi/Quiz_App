import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const HisResult = ()  => {
    const Points = localStorage.getItem('points')
    return(
        <div className="app__wrapper">
            <Header/>
            <div>Twój wynik to {Points}/10</div>
            <Link to='/'>
                <button>Powtórz test</button>
            </Link>
            
        </div>

    )
}

export default HisResult