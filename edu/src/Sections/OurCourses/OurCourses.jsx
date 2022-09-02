import React from 'react'
import "./styles.scss"
export default function CategoryCards() {
  return (
    <div className="our__courses__section">
      <div className="courses__title"><span>Our Course</span></div>
      <div className="courses__subtitle"><span>Show Our Unique Course</span></div>
        <div className="courses__categories">
          {["Business","Business","Business","Business","Business","Business","Business"].map((cat)=><span>{cat}</span>)}
        </div>
    </div>
  )
}
