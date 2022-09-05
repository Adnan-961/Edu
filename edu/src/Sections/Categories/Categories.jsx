import React from "react";
import "./styles.scss";
import Category from "../../Components/Category/Category";
import { health, langauge } from "./data";
import { tutoring } from "./data";
import { music } from "./data";
import { Sports } from "./data";
import { Art } from "./data";

export default function Categories() {
  return (
    <div className="category__section">
      <div className="category__title">
        <h2>Languages</h2>
      </div>
      <div className="categories_container">
        {langauge.map((cat) => (
          <Category name={cat.name} />
        ))}
      </div>

      <div className="category__title">
        <h2>Academic Tutoring</h2>
      </div>
      <div className="categories_container">
        {tutoring.map((cat) => (
          <Category name={cat.name} />
        ))}
      </div>

      <div className="category__title">
        <h2>Music</h2>
      </div>
      <div className="categories_container">
        {music.map((cat) => (
          <Category name={cat.name} />
        ))}
      </div>

      <div className="category__title">
        <h2>Gym & Sports</h2>
      </div>
      <div className="categories_container">
        {Sports.map((cat) => (
          <Category name={cat.name} />
        ))}
      </div>

      <div className="category__title">
        <h2>Art & Craft</h2>
      </div>
      <div className="categories_container">
        {Art.map((cat) => (
          <Category name={cat.name} />
        ))}
      </div>

      <div className="category__title">
        <h2>Health & Wellness</h2>
      </div>
      <div className="categories_container">
        {health.map((cat) => (
          <Category name={cat.name} />
        ))}
      </div>
    </div>
  );
}
