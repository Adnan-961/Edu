import React from "react";
import "./Tutors.styles.scss";
import TutorProfile from "../../Components/TutorProfile/TutorProfile";
import Brad from "../../assets/images/tutor.png";
export default function Tutors() {
  const description =
    "I am an educator who designs excellent engaging, student-centred experiences that nurture a love of learning and embraces the unique talents of every child. I create a safe, nurturing and innovative learning environment and strive to make a difference in each child's life...See All ";
  return (
    <div className="Tutors__container">
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
  );
}
