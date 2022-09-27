import React from 'react';
import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList';


const Homepage = () => {

    return (
        <div className="app__wrapper">
            <Header/>
            <div>
                <h2>10 PYTAŃ/5 KATEGORII</h2>
            </div>
            <div>
                <h2>WYBIERZ KATEGORIĘ</h2>
                <CategoryList class={"categories__wrapper"}/>
            </div>
        </div>
    )
}

export default Homepage;