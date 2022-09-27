import React from "react";
import Category_Button from '../../components/Buttons/Category_Button';
import technologia_ikona from "../../assets/technologia_ikona_.svg"
import kultura_ikona from "../../assets/kultura_ikona.svg"
import historia_ikona from "../../assets/historia_ikona.svg"
import motoryzacja_ikona from "../../assets/motoryzacja_ikona.svg"
import programowanie_ikona from "../../assets/programowanie_ikona.svg"

const CategoryList = (props) => {
    const CategoryButtonsList = [
        {id: 0, Link: "/Category" , button:"container__button--tech" , img: technologia_ikona , header: "Technologia"},
        {id: 1, Link: "/Category" , button:"container__button--tech" , img: kultura_ikona , header: "Kultura"},
        {id: 2, Link: "/Category" , button:"container__button--tech" , img: motoryzacja_ikona , header: "Motoryzacja"},
        {id: 3, Link: "/Category" , button:"container__button--tech" , img: programowanie_ikona , header: "Programowanie"},
        {id: 4, Link: "/Category" , button:"container__button--tech" , img: historia_ikona , header: "Historia"},
    ];

    const CategoryButtonsListItem = CategoryButtonsList.map((item) => 
    <Category_Button key={item.id} Link={item.Link} button={item.button} img={item.img} header={item.header}/>
    )
    return(
        <div className={props.class}>
            {CategoryButtonsListItem}
        </div>
    )
}

export default CategoryList;