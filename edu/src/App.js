import React from "react";
import "./app.styles.scss";
import Navbar from "./Sections/Navbar/Navbar";
import Header from "./Sections/Header/Header";
import OurCourses from "./Sections/OurCourses/OurCourses";
import Categories from "./Sections/Categories/Categories";
import Promo from "./Sections/MobileApp/MobileApp";
import WhereToLearn from "./Sections/WhereToLearn/WhereToLearn";
import Footer from "./Sections/Footer/Footer";
import Newsletter from "./Sections/NewsLetter/Newsletter";
import RelatedLessons from "./Sections/RelatedLessons/RelatedLessons";
import Info from "./Sections/Info/Info";
import Landing from "./Sections/Landing/Landing";
import ForgotPassword from "./Sections/ForgotPassword/ForgotPassword";
import ChangePassword from "./Sections/ChangePassword/ChangePassword";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Login from "./Sections/Login/Login";
import Signup from "./Sections/Signup/Signup";
import PasswordChanged from "./Sections/PasswordChanged/PasswordChanged";
function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget" element={<ForgotPassword />} />
          <Route path="/change" element={<ChangePassword />} />
          <Route path="/success" element={<PasswordChanged />} />
        </Routes>
        {/* <Header />
        <OurCourses />
        <Landing />
        <RelatedLessons />
        <WhereToLearn />
        <Info />
        <Categories />
        <Promo />
        <Newsletter />

        <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
