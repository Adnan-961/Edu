import React from "react";
import Rating from "@mui/material/Rating";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./Course.scss";
export default function Course({ image, category, name, rating }) {
  return (
    <div className="lesson__container">
      <img alt="" src={image} />
      <div className="lesson__info">
        <div className="lesson__title">
          <span>{name}</span>
        </div>
        <div className="lesson__rating">
          <Rating name="read-only" value={rating} readOnly />
          <p style={{ "white-space": "nowrap" }}>Best Rated</p>
        </div>
      </div>
      <div className="course__btn">
        <button>
          Start Learning Today
          <ArrowRightAltIcon />
        </button>
      </div>
    </div>
  );
}
