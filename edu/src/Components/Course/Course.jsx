import React from "react";
import Rating from "@mui/material/Rating";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./Course.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import fav from "../../assets/svgs/heart.svg";
export default function Course({ image, category, name, rating }) {
  const [isFav, setIsFav] = useState(false);
  return (
    <div className="lesson__container">
      <img alt="course image" src={image} />
      <div className="heart">
        <FavoriteIcon
          style={!isFav ? { color: "#D6D6E0" } : { color: "rgb(252, 56, 56)" }}
          onClick={() => setIsFav(!isFav)}
        />
      </div>
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
