import React from "react";
import { Link } from "react-router-dom";
import StartButton from "../../components/Buttons/StartButton";
import CategoryList from "../../components/CategoryList";
import Header from "../../components/Header";
import Icon from "../../components/Ikons/Icon";

const HisResult = () => {
  const Points = localStorage.getItem("points");
  const CatImg = localStorage.getItem("category_img");
  const Cat = localStorage.getItem("category");
  return (
    <div className="app__wrapper">
      <Header />
      <div className="quiz__resultWrapper">
        <div className="quiz__resultWrapper--result">
          <div className={`container__category--${Cat}`}>
            <Icon img={CatImg} header={Cat} />
          </div>
          <div className="quiz__resultWrapper--wrapper">
            <div className="quiz__resultWrapper--wrapper-Content">
                <p>Twój wynik</p>
                    <div className="quiz__main--questionNum quiz__resultWrapper--resultPoints">
                        <p>{Points}/10</p>
                    </div>
            </div>
            
          </div>
          <Link to="/Question">
                <StartButton content={"Powtórz quiz"}/>
            </Link>
        </div>
        <div className="quiz__resultWrapper--nav">
          <h2>Wybierz kategorię</h2>
          <div>
          <CategoryList class={"categories__wrapper--result"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HisResult;
