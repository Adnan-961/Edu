import React from "react";
import "./Info.styles.scss";
import { data } from "../../assets/data/Info-data";
export default function Info() {
  return (
    <div className="info__container">
      <div className="group">
        {data &&
          data.map((item, i) => (
            <div className="content" key={i}>
              <span>{item.title}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
