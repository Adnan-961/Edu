import React from "react";
import "./styles.scss";
import machine from "../../assets/images/machine-learning.png";
import three from "../../assets/images/three.png";
import Location from "../../assets/images/location.png";
import globe from "../../assets/images/globe.png";

let data = [
  {
    title: "Home",
    icon: machine,
    description:
      "Do you want your teacher to come to your house for music lessons? Well, wherever you are, we’ll be coming for you.",
  },
  {
    title: "Location",
    icon: Location,
    description:
      "Want to take music lessons at your favorite place? We are on the go! Yes, that’s right! The choice of place is all yours, whether in a cafe, in a library, in our studio or wherever you want, we’ll be there for you.",
  },
  {
    title: "Virtual",
    icon: globe,
    description:
      "Are you up to learning music lessons in our virtual classrooms? Then, meet your music teacher online through your smartphones, laptop or computer.",
  },
];

const LearningContainer = ({ title, description, icon }) => {
  return (
    <div className="learn_feature">
      <img src={icon} alt="machine" className="learn_img" />
      <div className="learn_text">
        <div cp lassName="title">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function WhereToLearn() {
  let description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorum magnam, facilis sunt ipsam officia";
  return (
    <div className="learn__container">
      <div className="learn__about">
        <h3>About Company</h3>
        <h1>Where Do You Want To Learn</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          voluptatum vel ullam culpa alias quas nesciunt maiores itaque
          veritatis, omnis dolorem quia ipsum eum quasi animi magni. Dicta, ab
          unde?
        </p>
        <div className="learn__features">
          {data &&
            data.map((item, i) => (
              <LearningContainer
                title={item.title}
                description={item.description}
                icon={item.icon}
                key={i}
              />
            ))}
          <div className="learn__contact_btn">
            <span>More About</span>
          </div>
        </div>
      </div>
      <img alt="" src={three} className="learn__images" />
    </div>
  );
}
