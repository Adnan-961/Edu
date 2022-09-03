import React from "react";
import "./styles.scss";
import Logo from "../../assets/images/logo.png";
export default function Navbar() {
  return (
    <div className="navbar__container">
      <div className="nav__container">
        <img src={Logo} alt="Logo" className="logo"/>
        <div className="navigation">
          <div className="nav__link">
            <input type={"text"} placeholder="What would you like to learn?"/>
          </div>
          <div className="nav__link">
            <span>Become a Teacher</span>
          </div>
          <div className="nav__link">
            <span>Login</span>
          </div>
          <div className="nav__link">
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
