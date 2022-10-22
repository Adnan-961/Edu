import React from "react";
import "./app.styles.scss";
import Navbar from "./Sections/Navbar/Navbar";
import Header from "./Sections/Header/Header";
import OurCourses from "./Sections/OurCourses/OurCourses";
import Categories from "./Sections/Categories/Categories";
import Promo from "./Sections/MobileApp/MobileApp";
import WhereToLearn from "./Sections/WhereToLearn/WhereToLearn";
import Footer from "./Sections/Footer/Footer";
import NavCategories from "./Sections/NavCategories/NavCategories";
import Newsletter from "./Sections/NewsLetter/Newsletter";
import RelatedLessons from "./Sections/RelatedLessons/RelatedLessons";
import Info from "./Sections/Info/Info";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <OurCourses />
      <RelatedLessons />
      <WhereToLearn />/
      <Info />
      <Categories />
      <Promo />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
