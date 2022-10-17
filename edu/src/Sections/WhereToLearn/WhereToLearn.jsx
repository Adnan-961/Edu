import React from "react";
import "./wheretolearn.styles.scss";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import learn from "../../assets/images/learn.png";

import { data } from "../../assets/data/wheretolearn-data";
import { text } from "../../assets/data/wheretolearn-data";

export default function WhereToLearn() {
  return (
    <div className="wheretolearn__container">
      <div className="col1">
        <h1>{text.header}</h1>
        <p>{text.p}</p>
        {/* <img src={learn} alt="" /> */}
      </div>
      <div className="col2">
        {data &&
          data.map((feature) => (
            <div className="feature">
              <img src={feature.image} alt="learning feature" />
              <h1>{feature.name}</h1>
              <p>{feature.text}</p>
            </div>
          ))}
        <button>
          {text.button}
          <ArrowRightAltIcon />
        </button>
      </div>
    </div>
  );
}
