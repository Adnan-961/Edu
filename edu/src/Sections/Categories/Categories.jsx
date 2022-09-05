import React from "react";
import "./styles.scss";
import Category from "../../Components/Category/Category";
import { health, langauge, tutoring, music, Sports, Art } from "./data";

export default function Categories() {
  return (
    <div className="category__section">
      <div className="category__title">
        <h2>Languages</h2>
      </div>
      <div className="categories_container">
        {langauge.map((cat, i) => (
          <Category Key={i} name={cat.name} />
        ))}
      </div>

      <div className="category__title">
        <h2>Academic Tutoring</h2>
      </div>
      <div className="categories_container">
        {tutoring.map((cat, i) => (
          <Category Key={i} name={cat.name} />
        ))}
      </div>

      <div className="category__title">
        <h2>Music</h2>
      </div>
      <div className="categories_container">
        {music.map((cat, i) => (
          <Category Key={i} name={cat.name} />
        ))}
      </div>

      <div className="category__title">
        <h2>Gym & Sports</h2>
      </div>
      <div className="categories_container">
        {Sports.map((cat, i) => (
          <Category Key={i} name={cat.name} />
        ))}
      </div>

      <div className="category__title">
        <h2>Art & Craft</h2>
      </div>
      <div className="categories_container">
        {Art.map((cat, i) => (
          <Category Key={i} name={cat.name} />
        ))}
      </div>

      <div className="category__title">
        <h2>Health & Wellness</h2>
      </div>
      <div className="categories_container">
        {health.map((cat, i) => (
          <Category Key={i} name={cat.name} />
        ))}
      </div>
    </div>
  );
}
