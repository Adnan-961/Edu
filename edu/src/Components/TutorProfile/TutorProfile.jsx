import React from "react";
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
        <p>{description}</p>
      </div>
    </div>
  );
}
