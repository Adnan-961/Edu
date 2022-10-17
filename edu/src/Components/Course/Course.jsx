import React from "react";
import Rating from "@mui/material/Rating";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import stars from "../../assets/images/stars.png";
import "./Course.scss";
export default function Course({ image, category, name, rating, ref }) {
  return (
    <div className="lesson__container" ref={ref && ref}>
      <img alt="" src={image} />
      <div className="lesson__info">
        <div className="lesson__title">
          <span>{name}</span>
        </div>
        <div className="lesson__rating">
          <Rating name="read-only" value={rating} readOnly />
          <p>Best Rated</p>
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
