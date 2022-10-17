import React from "react";
import "./navCategories.styles.scss";
export default function NavCategories({ categories }) {
  return (
    <div className="nav__categories">
      {categories.map((category) => (
        <div className="category">
          <div className="category__title">{category.name}</div>
          <div className="category__details">
            {category.array.slice(0, 8).map((list) => (
              <li>{list}</li>
            ))}
            <li className="nav_viewmore">See All</li>
          </div>
        </div>
      ))}
    </div>
  );
}
