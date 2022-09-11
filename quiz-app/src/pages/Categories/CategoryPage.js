import React from 'react';
import { Link } from 'react-router-dom';
import StartButton from '../../components/Buttons/StartButton';
import Header from '../../components/Header';
import Icon from '../../components/Ikons/Icon';

const CategoryPage = () =>{
    const CatImg = localStorage.getItem("category_img")
    const Cat = localStorage.getItem("category")
    console.log(CatImg)

    return(
        <div className="app__wrapper">
            <Header/>
            <Icon img={CatImg} header={Cat}/>
            <Link to="/Question">
                <StartButton/>
            </Link>
            
        </div>
    )
}

export default CategoryPage;