import React from 'react'
import "./styles.scss"
import img from "../../assets/images/kids.jpg"
export default function Promo() {
  return (
    <div className="promo_container">
            
          <div className="img__container">  <img src={img} alt="promo" className='promo_img' /></div>
          <div className="app__container">
            <h3>Download apps</h3>
            <h1>Download Our Mobile App Start Learning Today</h1>

            <div className="features">
                features
            </div>

            <div className="promo__btns">
                btn
            </div>
          </div>
    </div>
  )
}
