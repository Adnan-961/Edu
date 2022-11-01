import React, { useState } from "react";
import "./categories.styles.scss";
import locationImg from "../../assets/svgs/locations.svg";
import searchIcon from "../../assets/svgs/search.svg";
import usa from "../../assets/svgs/united-states 1.svg";
import searchsvg from "../../assets/svgs/searchicon.svg";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { lessons } from "../../assets/data/Teacher-Lessons";
import { text } from "../../assets/data/Teacher-Lessons";
import { countries } from "../../assets/data/Teacher-Lessons";

export default function Categories() {
  const [toggleTeacher, setToggleTeacher] = useState(true);
  const [toggleLesson, setToggleLesson] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState("united states");
  const [search, setSearch] = useState("");

  return (
    <div className="category__section">
      <div className="headers">
        <h2
          className={toggleTeacher ? "selected" : ""}
          onClick={() => {
            setToggleTeacher(true);
            setToggleLesson(false);
          }}
        >
          {text.header1}
          <KeyboardArrowUpIcon className={`${toggleLesson && "invert"}`} />
        </h2>
        <h2
          className={toggleLesson ? "selected" : ""}
          onClick={() => {
            setToggleTeacher(false);
            setToggleLesson(true);
          }}
        >
          {text.header1}
          <KeyboardArrowUpIcon className={`${toggleTeacher && "invert"}`} />
        </h2>
      </div>

      {toggleTeacher && <FindTeacher />}
      {toggleLesson && <TrendingLessons />}
    </div>
  );
}

const CategoryContainer = ({ title }) => {
  return <div className="category_card">{title}</div>;
};

const LessonContainer = ({ header, array }) => {
  return (
    <div className="lesson__category">
      <h2>{header}</h2>
      <div className="details">
        {array &&
          array.map((lesson) => (
            <div className="lesson">
              <img src={lesson.image} alt="lesson" />
              <span>{lesson.courseName}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

const TrendingLessons = () => {
  return (
    <div className="privates__lessons ">
      {lessons &&
        lessons.map((lesson) => (
          <LessonContainer header={lesson.title} array={lesson.array} />
        ))}
    </div>
  );
};

const FindTeacher = () => {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("united states");

  return (
    <div className="teacher__section__container">
      <div className="findateacher__section hidden">
        <div className="select__container">
          <img src={locationImg} alt="loaction" />
          <select onChange={(e) => setSelectedCountry(e.target.value)}>
            {countries.map((country) => (
              <option value={country.country}>{country.country}</option>
            ))}
          </select>
        </div>

        <button>
          <img src={searchIcon} alt="search" />
        </button>
      </div>
      <div className="filter">
        <div className="header">
          <img src={usa} alt="flag" /> <span>{selectedCountry}</span>
        </div>
        <div className="filter__search">
          <div className="search">
            <img src={searchsvg} alt="" />
            <input
              type="text"
              placeholder={"Search For Cities..."}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="cities hidden">
            {!search &&
              countries
                .find((country) => country.country === selectedCountry)
                .cities.map((city, i) => (
                  <CategoryContainer key={i} title={city} />
                ))}

            {search &&
              countries
                .find((country) => country.country === selectedCountry)
                .cities.filter((city) => city.toLowerCase().startsWith(search))
                .map((city, i) => <CategoryContainer key={i} title={city} />)}
          </div>
        </div>
      </div>
    </div>
  );
};
