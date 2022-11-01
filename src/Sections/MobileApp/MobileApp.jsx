import React from "react";
import "./MobileApp.styles.scss";
import tick from "../../assets/svgs/tick.svg";
import lines from "../../assets/svgs/lines.png";
import google from "../../assets/svgs/google.svg";
import apple from "../../assets/svgs/apple.svg";
import { data } from "../../assets/data/app";
import { text } from "../../assets/data/app";
import img from "../../assets/images/app.png";
export default function MobileApp() {
  return (
    <>
      <div className="mobileApp__section">
        <div className="app__container">
          <span>{text.small_text}</span>
          <h1>
            {text.header.split(text.split)[0]}
            <span>
              {text.split}
              <img src={lines} alt="" />
            </span>
            Today
          </h1>

          <div className="feature__list">
            {data.map((feature) => (
              <div className="feature">
                <img src={tick} alt="" /> <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <img src={img} alt="" className="mobile__bg" />
      </div>
      {/* <div className="btns">
        <div className="google">
          <img src={google} alt="google btn" />
          <button>
            <span>Available on</span>Google Play
          </button>
        </div>
        <div className="apple">
          <img src={apple} alt="apple btn" />
          <button>
            <span>Get it On</span>Apple Store
          </button>
        </div>
      </div> */}
    </>
  );
}
