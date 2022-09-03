import React from "react";
import "./styles.scss";
import carousel_img from "../../assets/images/carousel.jpg";
import team from "../../assets/images/team.jpg";
import team1 from "../../assets/images/1.jpg";
import team2 from "../../assets/images/2.jpg";
import team3 from "../../assets/images/3.jpg";
import team4 from "../../assets/images/4.jpg";
import team5 from "../../assets/images/5.jpg";

export default function Header() {
  const teamImages = [team, team1, team2, team3, team4, team5, team, team1] 
  return (
    <div className="header__container">
      <div className="header__phrase">
        <p className="heading">Learning With Educify</p>
        <p className="subtitle"> Education Is The Bedrock Of Success Today, I Am Going To Learn</p>
        <p className="header__text">
          Are you ready to start your education path?
        </p>

        <button className="button">learn more</button>
      </div>
      <img src={team} alt="header_img"  className="header_img"/>
      <div className="header__carousel">
        <div className="carousel">
          {
            teamImages.map((image, i) =>
            <img src={image} alt="carousel img" key={i}/>
          )
          }
        </div>
      </div>
    </div>
  );
}
