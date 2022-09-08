import React, { useState } from "react";
import "./styles.scss";
import Category from "../../Components/Category/Category";
import { categories } from "./data";
import { countries } from "./data";
const CategoryContainer = ({ array, title }) => {
  return (
    <div>
      <div className="category__title">
        <h2>{title}</h2>
      </div>
      <div className="categories_container">
        {array.map((cat, i) => (
          <div className="category_card" key={i}>
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Categories() {
  const [isActiveCountries, setIsActiveCountries] = useState(true);

  return (
    <div className="category__section">
      <div className="categories__filter">
        <h4
          className={isActiveCountries && "active"}
          onClick={() => setIsActiveCountries(true)}
        >
          Find a Teacher Anywhere
        </h4>
        <h4
          className={!isActiveCountries && "active"}
          onClick={() => setIsActiveCountries(false)}
        >
          Trending Private Lessons
        </h4>
      </div>
      {!isActiveCountries &&
        categories.map((item, i) => (
          <CategoryContainer key={i} array={item.array} title={item.name} />
        ))}

      {isActiveCountries &&
        countries.map((item, i) => (
          <CategoryContainer key={i} array={item.array} title={item.name} />
        ))}
    </div>
  );
}
