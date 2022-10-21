import React, { useState, useRef, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import hamburger from "../../assets/svgs/menu.svg";
import "./navbar.styles.scss";
import Logo from "../../assets/images/logo.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import searchsvg from "../../assets/svgs/searchicon.svg";
import NavCategories from "../../Sections/NavCategories/NavCategories";
import { categories } from "../../assets/data/navbar-Modal-data";
import { inputs } from "../../assets/data/navbar-data";
import search from "../../assets/svgs/search.svg";
export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="navbar__container">
      <div
        className={`navbar__mobile ${openNav ? "navbar__mobile__active" : ""}`}
      ></div>
      <div className="navbar__menu mobile">
        <img src={hamburger} alt="" onClick={() => setOpenNav(!openNav)} />
        <div
          className={`close__navbar ${openNav ? "close__navbar__active" : ""}`}
          onClick={() => setOpenNav(false)}
        >
          <CloseIcon />
        </div>
      </div>
      <div className="navbar__logo">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar__menu mobile">
        <img src={search} alt="" className="mobile" />
      </div>
      <div className={`navbar__links`}>
        <div className="nav__dropdown">
          <button
            className="primary"
            onBlur={() => setOpenMenu(false)}
            onClick={toggleMenu}
          >
            {inputs.primary}
            <ExpandMoreIcon
              className={`${openMenu && "btn__chevron__rotate"}`}
            />
          </button>
          <div className={`nav__menu ${openMenu ? "active" : ""}`}>
            <NavCategories categories={categories} />
          </div>
        </div>

        <div className="nav__search">
          <img src={searchsvg} alt="" />
          <input type="text" placeholder={inputs.search} />
        </div>

        <button className="teacher__btn"> {inputs.teacher}</button>
        <button className="nav__login"> {inputs.login}</button>
      </div>
    </nav>
  );
}
