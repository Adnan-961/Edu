import React from "react";
import computing from "../../assets/images/lessons/computing.png";
import "./relatedLessons.styles.scss";
import { data } from "../../assets/data/relatedLessons";
import { text } from "../../assets/data/relatedLessons";
export default function RelatedLessons() {
  return (
    <div className="related__lessons__container">
      <div className="related__header">
        <h1>{text.header}</h1>
      </div>
      <div className="related__lessons">
        {data &&
          data.map((lesson, i) => (
            <div className="lesson" key={i}>
              <div className="lesson__details">
                <img src={lesson.image} alt="lesson image" />
                <span>{lesson.name}</span>
              </div>
              <p>
                {lesson.details.split("... See All")[0]}
                <span className="lesson__seeall">
                  <a href={lesson.url}>... See All</a>
                </span>
              </p>
              <span className="lesson__categories">8 Categories</span>
            </div>
          ))}
      </div>
    </div>
  );
}
