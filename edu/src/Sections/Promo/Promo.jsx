import React from "react";
import "./styles.scss";
import img from "../../assets/images/kids.jpg";
import google from "../../assets/images/google-play.png";
import apple from "../../assets/images/apple.png";

import check from "../../assets/images/check.png";
import { data } from "./data";
export default function Promo() {
  return (
    <div className="promo_container">
      <div className="img__container">
        {" "}
        <img src={img} alt="promo" className="promo_img" />
      </div>
      <div className="app__container">
        <h3>Download apps</h3>
        <h1>Download Our Mobile App Start Learning Today</h1>

        <div className="features">
          {data.map((feat) => (
            <div className="feature">
              <img src={check} alt="check" />
              <span>{feat.name}</span>
            </div>
          ))}
        </div>

        <div className="promo__btns">
          <div className="google">
            <img src={google} alt="googleplay" />
            <div className="title">
              <p>GET IT ON</p>
              <span>GOOGLE PLAY</span>
            </div>
          </div>
          <div className="apple">
            <img src={apple} alt="googleplay" />
            <div className="title">
              <p>AVAILABLE ON THE</p>
              <span>Apple Store</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
