import React, { useState } from "react";
import "./categories.styles.scss";
import locationImg from "../../assets/svgs/locations.svg";
import searchIcon from "../../assets/svgs/search.svg";
import usa from "../../assets/svgs/united-states 1.svg";
import searchsvg from "../../assets/svgs/searchicon.svg";
import { countries } from "../../assets/data/teachers";
import { courses } from "../../assets/data/courses";
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
          Find a Teacher Anywhere
        </h2>
        <h2
          className={toggleLesson ? "selected" : ""}
          onClick={() => {
            setToggleTeacher(false);
            setToggleLesson(true);
          }}
        >
          Trending Private Lessons
        </h2>
      </div>

      {toggleTeacher && (
        <>
          <div className="findateacher__section">
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
              <div className="cities">
                {!search &&
                  countries
                    .find((country) => country.country === selectedCountry)
                    .cities.map((city, i) => (
                      <CategoryContainer key={i} title={city} />
                    ))}

                {search &&
                  countries
                    .find((country) => country.country === selectedCountry)
                    .cities.filter((city) =>
                      city.toLowerCase().startsWith(search)
                    )
                    .map((city, i) => (
                      <CategoryContainer key={i} title={city} />
                    ))}
              </div>
            </div>
          </div>
        </>
      )}
      {toggleLesson && (
        <div className="privates__lessons">
          {courses &&
            courses.map((lesson) => (
              <LessonContainer header={lesson.title} array={lesson.array} />
            ))}
        </div>
      )}
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
