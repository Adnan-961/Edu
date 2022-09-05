import React from "react";
import "./styles.scss";
import Category from "../../Components/Category/Category";
import { categories } from "./data";

const CategoryContainer = ({array, title}) => {
  console.log("array")
  return(
    <div>
      <div className="category__title">
        <h2>{title}</h2>
      </div>
      <div className="categories_container">
        {
          array.map((cat, i) => (
            <div className="category_card" key={i}>
              {cat}
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default function Categories() {
  return (
    <div className="category__section">
      {
        categories.map((item, i) => 
          <CategoryContainer key={i} array={item.array} title={item.name}/>
        )
      }
    </div>
  );
}
