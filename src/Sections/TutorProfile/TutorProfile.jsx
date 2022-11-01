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
}) {
  return (
    <div className="tutor">
      <div className="tutor__profile__container">
        <div className="main__info">
          <div className="tutor__img">
            <img src={img} alt="tutori img" />
          </div>
          <div className="profile">
            <div className="title">
              <span>Brad Dennis</span> <img src={verified} alt="" />
            </div>
            {/* <div className="propreties">
              <span>
                <img src={tutorType} />
                Tutor
              </span>
              <span>
                <img src={tutorLocation} />
                Germany
              </span>
              <span>
                <img src={tutorEmail} />
                Bradden@educify.io
              </span>
            </div> */}
            <div className="details">
              <div className="label">
                pricing:
                <div className="pricing">
                  <span>$1.40</span>
                  <p>Starting At</p>
                </div>
              </div>
              <div className="label">
                rating:
                <div className="rating">
                  <span>5.0</span>
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
          I am an educator who designs excellent engaging, student-centred
          experiences that nurture a love...See All
        </p>
      </div>
    </div>
  );
}
