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
      <h1>{text.header}</h1>
      <p>{text.p}</p>
      <div className="carousel">
        {courses.map((section) => (
          <div className="inner__carousel">
            <div className="lesson__header">
              <h1>{section.title}</h1>
              <span>
                <a href={section.link.href}>{section.link.text}</a>
              </span>
            </div>
            <div className="lessons">
              <Slider
                centerPadding={true}
                dots={false}
                slidesToShow={4}
                slidesToScroll={1}
                responsive={[
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                    },
                  },
                ]}
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
