import React from "react";
import { Link } from "react-router-dom";
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
                {/* <p>Twój wynik</p> */}
                <p>{Points}/10</p>
            </div>
            </div>

          </div>
        </div>
        <div className="quiz__resultWrapper--nav"></div>
      </div>
      <div>Twój wynik to {Points}/10</div>
      <Link to="/">
        <button>Powtórz test</button>
      </Link>
    </div>
  );
};

export default HisResult;
