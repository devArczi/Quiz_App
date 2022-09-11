import React from 'react';
import Category_Button from '../../components/Buttons/Category_Button';
import Header from '../../components/Header';
import technologia_ikona from "../../assets/technologia_ikona_.svg"
import kultura_ikona from "../../assets/kultura_ikona.svg"
import historia_ikona from "../../assets/historia_ikona.svg"
import motoryzacja_ikona from "../../assets/motoryzacja_ikona.svg"
import programowanie_ikona from "../../assets/programowanie_ikona.svg"


const Homepage = () => {
    const Link = '/Category';
    const button_class = ['container__button--tech','container__button--kult','container__button--moto', 'container__button--prog', 'container__button--his',]
    const imgs = [technologia_ikona, kultura_ikona, motoryzacja_ikona, programowanie_ikona, historia_ikona]
    const headerTxt = ['Technologia', 'Kultura', 'Motoryzacja', 'Programowanie', 'Historia', ]
    return (
        <div className="app__wrapper">
            <Header/>
            <div>
                <h2>10 PYTAŃ/5 KATEGORII</h2>
            </div>
            <div>
                <h2>WYBIERZ KATEGORIĘ</h2>
                <div className="categories__wrapper">
                     <div>
                        <Category_Button Link={Link} button={button_class[0]} img={imgs[0]} header={headerTxt[0]}/>
                        <Category_Button Link={Link} button={button_class[1]} img={imgs[1]} header={headerTxt[1]}/>
                        <Category_Button Link={Link} button={button_class[2]} img={imgs[2]} header={headerTxt[2]}/>
                    </div>
                    <div>
                        <Category_Button Link={Link} button={button_class[3]} img={imgs[3]} header={headerTxt[3]}/>
                        <Category_Button Link={Link} button={button_class[4]} img={imgs[4]} header={headerTxt[4]}/>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Homepage;