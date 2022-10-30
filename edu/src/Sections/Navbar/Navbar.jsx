import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import hamburger from "../../assets/svgs/menu.svg";
import "./navbar.styles.scss";
import Logo from "../../assets/images/logo.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import searchsvg from "../../assets/svgs/searchicon.svg";
import NavCategories from "../../Sections/NavCategories/NavCategories";
import search from "../../assets/svgs/search.svg";
import Select from "react-select";
import logo_mobile from "../../assets/images/logo_mobile.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { categories } from "../../assets/data/navbar-Modal-data";
import { inputs } from "../../assets/data/navbar-data";
import { customStyles } from "../../assets/data/navbar-mobile";
import { styles } from "../../assets/data/navbar-mobile";
import { options } from "../../assets/data/navbar-mobile";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page1, setPage1] = useState(true);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="navbar__container">
      <div
        className={`navbar__mobile ${openNav ? "navbar__mobile__active" : ""}`}
      >
        {page1 && (
          <NavLanding
            setSelectedCategory={setSelectedCategory}
            page1={page1}
            setPage1={setPage1}
          />
        )}
        {!page1 && (
          <GetCategories
            category={selectedCategory}
            setPage1={setPage1}
            page1={page1}
          />
        )}
      </div>
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
        <Link to={"/"}>
          {" "}
          <img src={Logo} alt="logo" />
        </Link>
        <img src={logo_mobile} alt="logo" className="logo__mobile" />
      </div>
      <div className="navbar__menu mobile">
        <div className="heart">
          <FavoriteBorderIcon style={{ color: "#fff" }} />
        </div>
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
        <Select
          options={options}
          className="languages"
          styles={styles}
          defaultValue={options[0]}
          isSearchable={false}
        />
        <div className="heart">
          <FavoriteBorderIcon style={{ color: "#fff" }} />
        </div>
        <button className="teacher__btn"> {inputs.teacher}</button>
        <button className="nav__login">
          <Link to={"/login"}>{inputs.login} </Link>
        </button>
      </div>
    </nav>
  );
}

const NavLanding = ({ setSelectedCategory, setPage1, page1 }) => {
  return (
    <div className="our__lessons">
      <div className="login">
        <Link to={"/login"}>
          <span>Log In</span>
        </Link>
      </div>
      <h3>Our Lessons</h3>
      <div className="nav__categories__mobile">
        {categories.slice(0, 13).map((cat) => (
          <div
            className="nav__category"
            onClick={() => {
              setSelectedCategory(cat.name);
              setPage1(!page1);
            }}
          >
            <span>{cat.name}</span>
            <ChevronRightIcon />
          </div>
        ))}
      </div>
      <div className="other">
        {" "}
        <Select
          options={options}
          className="languages"
          styles={customStyles}
          defaultValue={options[0]}
          isSearchable={false}
        />
        <select name="currency" id="nav__currency">
          <option value="euro">Euro</option>
          <option value="usd">USD</option>
        </select>
        <div className="nav__teacher">
          {" "}
          <button className="teacher__btn__mobile"> {inputs.teacher}</button>
        </div>
      </div>
    </div>
  );
};

const GetCategories = ({ category, setPage1, page1 }) => {
  return (
    <div className="nav__category__details">
      <div className="back">
        <span onClick={() => setPage1(!page1)}>
          <ChevronLeftIcon /> Menu
        </span>
      </div>
      <div className="nav__category__list">
        <h3>{category}</h3>
        {categories
          .find((cat) => cat.name === category)
          .array.map((found) => (
            <span>{found}</span>
          ))}
        <span className="cat__seeall">See All</span>
      </div>
    </div>
  );
};
