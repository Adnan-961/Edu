import Header from "../Header/Header";
import OurCourses from "../OurCourses/OurCourses";
import Categories from "../Categories/Categories";
import Promo from "../MobileApp/MobileApp";
import WhereToLearn from "../WhereToLearn/WhereToLearn";
import Newsletter from "../NewsLetter/Newsletter";
import RelatedLessons from "../RelatedLessons/RelatedLessons";
import Info from "../Info/Info";
import Landing from "../Landing/Landing";

import React from "react";

export default function HomePage() {
  return (
    <>
      <Header />
      <OurCourses />
      {/* <Landing /> */}
      <RelatedLessons />
      <WhereToLearn />
      <Info />
      <Categories />
      <Promo />
      <Newsletter />
    </>
  );
}
