import React from 'react';

import stars from '../../assets/images/stars.png'
import "./Course.scss"
export default function Course({image, category, courseName, teacher, teacherName, teacherPrice}) {
  return (
    <div className="Course_Container">
        <img alt="" src={image} />
        <div className='row2'>
          <div className='row2_header'>
            <h4>{category}</h4>
            <img alt="" src={stars} />
          </div>
          <h3>{courseName}</h3>
          <div className='teacherRow'>
            <img alt="" src={teacher} />
            <p>{teacherName}</p>
            <p className='price'>{teacherPrice}</p>
          </div>
        </div>

    </div>
  )
}
