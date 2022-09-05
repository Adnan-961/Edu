import React from "react";
import "./styles.scss";
import machine from "../../assets/images/machine-learning.png"
export default function WhereToLearn() {
  return (
    <div className="learn__container">
      <div className="learn__about">
        <h3>About Company</h3>
        <h1>We Are Truly Best For Distance Learning</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          voluptatum vel ullam culpa alias quas nesciunt maiores itaque
          veritatis, omnis dolorem quia ipsum eum quasi animi magni. Dicta, ab
          unde?
        </p>
        <div className="learn__features">
          <div className="learn_feature">
            <div className="learn_img"><img src={machine} alt="machine" width={"50px"} /></div>
            <div className="learn_text">
              <div cp lassName="title">
                <h3>App-Based Learning</h3>{" "}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur dolorum magnam, facilis sunt ipsam officia
                </p>
              </div>
            </div>
          </div>
{/*                                                                              */}
          <div className="learn_feature">
            <div className="learn_img"><img src={machine} alt="machine" width={"50px"} /></div>
            <div className="learn_text">
              <div cp lassName="title">
                <h3>App-Based Learning</h3>{" "}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur dolorum magnam, facilis sunt ipsam officia
                </p>
              </div>
            </div>
          </div>
{/*                                                                               */}

            <div className="learn__contact">
                <div className="btn">
                    <span>More About</span>
                </div>
            </div>
        </div>
      </div>
      <div className="learn__images"></div>
    </div>
  );
}
