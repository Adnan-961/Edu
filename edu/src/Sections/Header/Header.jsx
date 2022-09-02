import React from "react";
import "./styles.scss";
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
    </div>
  );
}
