import React from "react";
import "./styles.scss";
import Category from "../../Components/Category/Category";
import { langauge } from "./data";
export default function Categories() {
  return (
    <div className="category__section">
        <div className="category__title"><h2>Find a Teacher Anywhere</h2></div>
      <div className="categories_container">
        {langauge.map((cat) => (
          <Category name={cat.name} />
        ))}
      </div>
    </div>
  );
}
