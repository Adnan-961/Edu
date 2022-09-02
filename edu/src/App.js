import React from "react";
import "./styles.scss";
import Navbar from "./Sections/Navbar/Navbar";
import Header from "./Sections/Header/Header";
import OurCourses from "./Sections/OurCourses/OurCourses"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <OurCourses/>
    </div>
  );
}

export default App;
