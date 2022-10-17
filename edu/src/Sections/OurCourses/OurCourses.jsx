import React from "react";
import "./ourCourses.styles.scss";
import Course from "../../Components/Course/Course";

import arrow_right from "../../assets/svgs/arrow-right.svg";
import arrow_left from "../../assets/svgs/arrow-left.svg";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { courses } from "../../assets/data/courses";
import { text } from "../../assets/data/courses";

export default function CategoryCards() {
  const [carousel, setCarousel] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [lessonWidth, setLessonWidth] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    setCarouselWidth(ref.current.scrollWidth);
  }, []);

  let nbCourses = parseInt(courses.length * 280);

  return (
    <div className="lessons__section">
      <div className="lessons__title">
        <span>{text.header}</span>
        <p>{text.p}</p>
      </div>
      {courses.map((category) => (
        <div className="lesson__category__container">
          <div className="lesson__category">
            <div className="lesson__category__title">
              <h1>{category.title}</h1>
              <span>
                <a href={category.link.href}>{category.link.text}</a>
              </span>
            </div>
            <img
              src={arrow_right}
              alt="arrow right"
              className="arrow_right"
              onClick={() => setCarousel(carousel + 310)}
            />
            <img
              src={arrow_left}
              alt="arrow left"
              className="arrow_left"
              onClick={() => setCarousel(carousel - 310)}
            />
            <div className="lessons" ref={ref}>
              <div
                className="carousel"
                style={
                  carousel > nbCourses
                    ? setCarousel(0)
                    : { transform: `translate(-${carousel}px` }
                }
              >
                {category.array.map((item, i) => (
                  <Course
                    key={i}
                    category={item.category}
                    name={item.courseName}
                    rating={3}
                    image={item.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
