import React from "react";
import "./ourCourses.styles.scss";
import Course from "../../Components/Course/Course";

import { courses } from "../../assets/data/courses";
import { text } from "../../assets/data/courses";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Lessons() {
  return (
    <div className="lessons__section">
      <h1>Our Lessons</h1>
      <p>
        We offer the best premium education services. Achieve A Better Future &
        Attain Your Long- Standing Ambition by registering for any of our
        courses{" "}
      </p>
      <div className="carousel">
        {courses.map((section) => (
          <div className="inner__carousel">
            <div className="lesson__header">
              <h1>{section.title}</h1>
              <span>View All</span>
            </div>
            <div className="lessons">
              <Slider
                centerPadding={true}
                dots={false}
                slidesToShow={4}
                slidesToScroll={1}
              >
                {section.array.map((lesson) => (
                  <Course
                    name={lesson.courseName}
                    category={lesson.category}
                    image={lesson.image}
                    rating={5}
                  />
                ))}
              </Slider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
