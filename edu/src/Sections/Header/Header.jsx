import React from "react";
import "./header.styles.scss";
import rocket from "../../assets/svgs/rocket.svg";
import kickstart from "../../assets/svgs/kickstart.svg";
import searchIcon from "../../assets/svgs/search.svg";
import vector from "../../assets/svgs/Vector.svg";
import vectorTopRight from "../../assets/svgs/vector-top-right.svg";
import vector_search from "../../assets/svgs/Vectorbehind-search.svg";
import { HeaderData } from "../../assets/data/header-data";
import header from "../../assets/images/header.png";
export default function Header() {
  return (
    <div className="header__container">
      <div className="header__phrase">
        <div className="header__img">
          <img src={kickstart} alt="kickstart" className="kickstart" />
          <img src={rocket} alt="rocket icon" className="rocket" />
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
          <input type="text" placeholder="What do you want to learn ?" />
          <button>
            <img src={searchIcon} alt="search" />
          </button>
        </div>
      </div>
      <div className="header__bg__image">
        <img src={header} alt="" />
      </div>
      <div className="header__inputs__mobile">
        <input type="text" placeholder="What do you want to learn ?" />
        <button>
          <img src={searchIcon} alt="search" />
        </button>
      </div>
      <img src={vector} alt="vector" className="vector vector1" />
      <img src={vector_search} alt="vector" className="vector vector__search" />

      <img
        src={vectorTopRight}
        alt="vector"
        className="vector vector__top__right"
      />
    </div>
  );
}
