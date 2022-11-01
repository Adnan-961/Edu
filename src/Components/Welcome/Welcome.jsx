import React from "react";
import Logo from "../../assets/images/logo.png";

export const Welcome = ({ img, text }) => {
  return (
    <div className="welcome__container">
      <img src={Logo} alt="" />
      <h1>Welcome To Educify</h1>
      <p>{text}</p>
      <div className="background">
        <img src={img} alt="" />
      </div>
    </div>
  );
};
