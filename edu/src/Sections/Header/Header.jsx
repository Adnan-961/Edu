import React from "react";
import "./styles.scss";
import carousel_img from "../../assets/images/carousel.jpg";
import team from "../../assets/images/team.jpg";

export default function Header() {
  return (
    <div className="header__container">
      <div className="header__phrase">
        <p className="heading">Learning With Learnway</p>
        <p className="subtitle">Be An Achiever With Good Education</p>
        <p className="header__text">
          Pellentesque Non Aliquet Sem. Aliquam Facilisis Nec Velit Vitae
          Commodo. Orci Varius Natoque Penatibus
        </p>

        <button>learn more</button>
      </div>
      <div className="header__img">
        <img src={team} alt="header_img" />
      </div>
      <div className="header__carousel">
        <div className="carousel">
        <img src={carousel_img} alt="carousel img" />
          <img src={carousel_img} alt="carousel img" />
          <img src={carousel_img} alt="carousel img" />
          <img src={carousel_img} alt="carousel img" />
          <img src={carousel_img} alt="carousel img" />
          <img src={carousel_img} alt="carousel img" />
        </div>
      </div>
    </div>
  );
}
