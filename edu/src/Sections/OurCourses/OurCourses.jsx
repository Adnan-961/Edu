import React from "react";
import "./styles.scss";
import Course from "../../Components/Course/Course";

import image1 from '../../assets/images/1.jpg'
import image2 from '../../assets/images/2.jpg'
import image3 from '../../assets/images/3.jpg'
import image4 from '../../assets/images/4.jpg'
import image5 from '../../assets/images/5.jpg'
import image6 from '../../assets/images/team.jpg'
import teacher from '../../assets/images/teacher.jpg'

export default function CategoryCards() {

  const courses = [
    {
      category:"Languages",
      courseName:"French Course For Beginners",
      teacher:teacher,
      teacherName:"John Smith",
      teacherPrice:"60.00$",
      image: image1
    },
    {
      category:"Music",
      courseName:"Guitar Course For Beginners",
      teacher:teacher,
      teacherName:"John Smith",
      teacherPrice:"60.00$",
      image: image2
    },
    {
      category:"ACADEMIC TUTORING",
      courseName:"French Course For Beginners",
      teacher:teacher,
      teacherName:"John Smith",
      teacherPrice:"60.00$",
      image: image3
    },
    {
      category:"GYM & SPORTS",
      courseName:"French Course For Beginners",
      teacher:teacher,
      teacherName:"John Smith",
      teacherPrice:"60.00$",
      image: image4
    },
    {
      category:"Life Style",
      courseName:"French Course For Beginners",
      teacher:teacher,
      teacherName:"John Smith",
      teacherPrice:"60.00$",
      image: image5
    },
    {
      category:"ART & CRAFT",
      courseName:"French Course For Beginners",
      teacher:teacher,
      teacherName:"John Smith",
      teacherPrice:"60.00$",
      image: image6
    },
  ]
  return (
    <div className="our__courses__section">
      <div className="courses__title">
        <span>Our Courses</span>
      </div>
      <div className="courses__subtitle">
        <span>Show Our Unique Course</span>
      </div>
      <div className="courses__categories">
        {[
          "Languages",
          "Music",
          "ACADEMIC TUTORING",
          "GYM & SPORTS",
          "Life Style",
          "ART & CRAFT",
          "HEALTH & WELLNESS",
        ].map((cat) => (
          <span>{cat}</span>
        ))}
      </div>

      <div className="courses">
        {
          courses.map((course, i) =>
            <Course 
              image={course.image} 
              category={course.category}
              courseName={course.courseName}
              teacher={course.teacher}
              teacherName={course.teacherName}
              teacherPrice={course.teacherPrice}
            />
          )
        }
    
      </div>
    </div>
  );
}
