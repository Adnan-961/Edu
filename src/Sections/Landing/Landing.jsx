import React from "react";
import { HeaderData } from "../../assets/data/Landing2";
import { useState } from "react";
import searchIcon from "../../assets/svgs/search.svg";
import landingImg from "../../assets/images/landing_bg.png";
import "./Landing.styles.scss";
import { categories } from "../../assets/data/navbar-Modal-data";
import Course from "../../Components/Course/Course";
import { courses } from "../../assets/data/LandingCourses";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function Landing() {
  const [selected, setSelected] = useState("languages");
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <>
      <div className="landing__container">
        <div className="header">
          <div className="details">
            <div className="breadcrumb">
              <p>Language </p>
              <p>
                <span> Home </span> / <span> Language </span>
              </p>
            </div>
            <h1>
              {HeaderData.header.phrase.split(HeaderData.header.highlight)[0]}{" "}
              <span className="highlight">{HeaderData.header.highlight}</span>
              {
                HeaderData.header.phrase.split(HeaderData.header.highlight)[1]
              }{" "}
            </h1>
            <p className="subtitle"> {HeaderData.paragraph.phrase}</p>
            <div className="landing__inputs">
              <input type="text" placeholder={HeaderData.placeholder} />
              <button>
                <img src={searchIcon} alt="" />
              </button>
            </div>
          </div>
          <div className="img">
            <img src={landingImg} alt="" />
            <div className="landing__inputs">
              <input type="text" placeholder="What to learn ?" />{" "}
              <button>
                <img src={searchIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="categories__slider">
          <div className={`dropdown ${showDropDown ? "active" : ""}`}>
            {HeaderData.moreDetails.map((detail) => (
              <span>{detail}</span>
            ))}
          </div>

          {categories.slice(0, 8).map((cat, i) => (
            <span
              key={i}
              onClick={() => setSelected(cat.name)}
              className={`${
                selected.toLowerCase() === cat.name.toLowerCase()
                  ? "selected"
                  : ""
              } `}
            >
              {cat.name}
            </span>
          ))}
          <span
            className="more__details"
            onClick={() => setShowDropDown(!showDropDown)}
          >
            :
          </span>
        </div>
      </div>
      <LandingCategories category={selected} />
    </>
  );
}

const LandingCategories = ({ category }) => {
  const Found = courses.find(
    (course) => course.title.toLowerCase() === category.toLowerCase()
  );
  return (
    <div className="landing__category">
      <h1>{category}</h1>
      <div className="landing__lessons__container">
        {Found &&
          Found.array.map((course, i) => (
            <Course
              key={i}
              name={course.courseName}
              category={course.category}
              image={course.image}
              rating={5}
            />
          ))}
      </div>
      <div className="landing__pagination">
        <span>Showing 1 to 12 of 20 entries</span>
        <div className="pages">
          <ArrowBackIosIcon />
          <span className="current__page">1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};
