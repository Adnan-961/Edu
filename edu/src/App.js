import React from "react";
import "./styles.scss";
import Navbar from "./Sections/Navbar/Navbar";
import Header from "./Sections/Header/Header";
import OurCourses from "./Sections/OurCourses/OurCourses"
import Categories from "./Sections/Categories/Categories";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <OurCourses/>
      <Categories/>
    </div>
  );
}

export default App;
