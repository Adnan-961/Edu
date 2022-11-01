import React from "react";
import "./Tutors.styles.scss";
import TutorProfile from "../../Components/TutorProfile/TutorProfile";
import Brad from "../../assets/images/tutor.png";
import Pagination from "../../Components/Pagination/Pagination";
import MultiRangeSlider from "../../Components/RangeSlider/RangeSlider";
export default function Tutors() {
  const description =
    "I am an educator who designs excellent engaging, student-centred experiences that nurture a love of learning and embraces the unique talents of every child. I create a safe, nurturing and innovative learning environment and strive to make a difference in each child's life";

  return (
    <div className="tutors__section">
      <div className="Tutors__container">
        <Panel />
        <div className="tutors__list">
          <TutorProfile
            name={"Brad Dennis"}
            location={"Germany"}
            image={Brad}
            isVerified
            email={"Brad@email.com"}
            minPrice="$1.40"
            rating={"5.0"}
            description={description}
          />
          <TutorProfile
            name={"Brad Dennis"}
            location={"Germany"}
            image={Brad}
            isVerified
            email={"Brad@email.com"}
            minPrice="$1.40"
            rating={"5.0"}
            description={description}
          />
        </div>
        {/* <Pagination /> */}
      </div>
    </div>
  );
}

const Panel = () => {
  return (
    <aside>
      <div className="container">
        <h1>Teacher Attribute</h1>
        <div className="bg__check">
          <span>Background Check</span> <input type="checkbox" name="bgCheck" />
        </div>
        <div className="price">
          <h1>Price</h1>
          <div className="option">
            <input type="radio" id="css" name="price" value="CSS" />
            <label for="price">0$ - 49$</label>
          </div>
          <div className="option">
            <input type="radio" id="css" name="price" value="CSS" />
            <label for="price">50$ - 99$</label>
          </div>
          <div className="option">
            <input type="radio" id="css" name="price" value="CSS" />
            <label for="price">100$ & Above</label>
          </div>
        </div>
        <div className="range">
          <span>Price Range</span>
          <div className="slider">
            <MultiRangeSlider
              min={0}
              max={100}
              onChange={({ min, max }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
            />
          </div>
        </div>
        <div className="location">
          <h1>Lesson Location</h1>
          {[
            { type: "online", color: "#1BC5BD" },
            { type: "Teacher's Place", color: "#FFA800" },
            { type: "Student's Place", color: "#8950FC" },
          ].map((option) => (
            <li>
              <div className="list__row">
                <div
                  className="circle"
                  style={{ backgroundColor: option.color }}
                ></div>
                {option.type}
              </div>
              <input type="checkbox" name="lesson" />
            </li>
          ))}
        </div>
        <div className="availablitiy">
          <h1>Availablitiy</h1>
          <div className="days">
            {["M", "T", "W", "Th", "F", "S"].map((day) => (
              <span>{day}</span>
            ))}
            <span className="selected">S</span>
          </div>
        </div>
        <div className="filter__btns">
          <button className="btn__primary">Setup</button>
          <button className="reset">Reset</button>
        </div>
      </div>
    </aside>
  );
};
