import React from "react";
import "./newsletter.styles.scss";
import { text } from "../../assets/data/NewsLetter";
export default function Newsletter() {
  return (
    <div className="newsletter__container">
      <div className="header">
        <h1>
          {text.header}
          <span>{text.span}</span>
        </h1>
        <p>{text.p}</p>
      </div>
      <div className="newsletter__inputs">
        <input type="text" placeholder="Enter Email Address" />
        <button className="newsletter__subscribe">{text.button}</button>
      </div>
    </div>
  );
}
