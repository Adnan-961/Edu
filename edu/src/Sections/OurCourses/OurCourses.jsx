import React from "react";
import "./styles.scss";
import Course from "../../Components/Course/Course";
export default function CategoryCards() {
  return (
    <div className="our__courses__section">
      <div className="courses__title">
        <span>Our Course</span>
      </div>
      <div className="courses__subtitle">
        <span>Show Our Unique Course</span>
      </div>
      <div className="courses__categories">
        {[
          "Business",
          "Design",
          "Development ",
          "Language",
          "Life Style",
          "Medical Science",
          "Technology",
        ].map((cat) => (
          <span>{cat}</span>
        ))}
      </div>

      <div className="courses">
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course /> 
        <Course />
        <Course />
        <Course />
      </div>
    </div>
  );
}
