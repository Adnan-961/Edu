import React, { useState, useEffect } from "react";
import "./TutorProfile.styles.scss";
import img from "../../assets/images/tutor.png";
import tutorType from "../../assets/svgs/tutor.svg";
import tutorLocation from "../../assets/svgs/tutor_location.svg";
import tutorEmail from "../../assets/svgs/tutor_email.svg";
import verified from "../../assets/svgs/verified.svg";
export default function TutorProfile({
  image,
  name,
  isVerified,
  email,
  location,
  description,
  rating,
  minPrice,
  isOnline,
}) {
  let desc =
    "I am an educator who designs excellent engaging, student-centred experiences that nurture a love of learning and embraces the unique talents of every child. I create a safe, nurturing and innovative learning environment and strive to make a difference in each child's life";
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <div className="tutor">
      <div className="tutor__profile__container">
        <div className="main__info">
          <div className="tutor__img">
            <img src={image} alt="tutori img" />
          </div>
          <div className="profile">
            <div className="title">
              <span>{name}</span>{" "}
              {isVerified && <img src={verified} alt="verified" />}
            </div>
            <div className="propreties">
              <span>
                <img src={tutorType} />
                Tutor
              </span>
              <span>
                <img src={tutorLocation} />
                {location}
              </span>
              <span>
                <img src={tutorEmail} />
                {email}
              </span>
            </div>
            <div className="details">
              <div className="label">
                Pricing:
                <div className="pricing">
                  <span>{minPrice}</span>
                  <p>Starting At</p>
                </div>
              </div>
              <div className="label">
                Rating:
                <div className="rating">
                  <span>{rating}</span>
                  <p>Rating</p>
                </div>
              </div>
            </div>
          </div>
          <div className="teacher__button__container">
            <button className="btn__primary">View Profile</button>
          </div>
        </div>
      </div>
      <div className="description">
        <p>
          {width > 768
            ? description.split(" ").slice(0, 43).join(" ")
            : description.split(" ").slice(0, 20).join(" ")}
          <span>...View all</span>
        </p>
      </div>
    </div>
  );
}
