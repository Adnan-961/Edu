import React from "react";
import "./header.styles.scss";
import kickstart from "../../assets/images/kickstart.png";
import searchIcon from "../../assets/svgs/search.svg";
import { HeaderData } from "../../assets/data/header-data";
import header from "../../assets/images/header.png";
export default function Header() {
  return (
    <div className="header__container">
      <div className="header__phrase">
        <div className="header__img">
          <img src={kickstart} alt="kickstart" className="kickstart" />
        </div>
        <h1 className="subtitle">
          {HeaderData.header.phrase.split(HeaderData.header.highlight)[0]}{" "}
          <span className="highlighted">{HeaderData.header.highlight}</span>
          {HeaderData.header.phrase.split(HeaderData.header.highlight)[1]}
        </h1>
        <p>
          {HeaderData.paragraph.phrase.split(HeaderData.paragraph.highlight)[0]}{" "}
          <span className="highlighted">{HeaderData.paragraph.highlight}</span>
          {HeaderData.paragraph.phrase.split(HeaderData.paragraph.highlight)[1]}
        </p>
        <div className="header__inputs">
          <input type="text" placeholder={HeaderData.placeholder} />
          <button>
            <img src={searchIcon} alt="search" />
          </button>
        </div>
      </div>
      <div className="header__bg__image">
        <img src={header} alt="header" />
      </div>
      <div className="header__inputs__mobile">
        <input type="text" placeholder={HeaderData.placeholder} />
        <button>
          <img src={searchIcon} alt="search" />
        </button>
      </div>
    </div>
  );
}
