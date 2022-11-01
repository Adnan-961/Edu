import React from "react";
import "./app.styles.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

import Navbar from "./Sections/Navbar/Navbar";
import Footer from "./Sections/Footer/Footer";
import Landing from "./Sections/Landing/Landing";
import ForgotPassword from "./Sections/ForgotPassword/ForgotPassword";
import ChangePassword from "./Sections/ChangePassword/ChangePassword";
import Login from "./Sections/Login/Login";
import Signup from "./Sections/Signup/Signup";
import PasswordChanged from "./Sections/PasswordChanged/PasswordChanged";
import HomePage from "./Sections/HomePage/HomePage";
import TutorProfile from "./Components/TutorProfile/TutorProfile";
import Tutors from "./Sections/Tutors/Tutors";
import Brad from "./assets/images/tutor.png";

function App() {
  const description = `I am an educator who designs excellent engaging, 
    student-centred experiences that nurture a love of learning
     and embraces the unique talents of every child.
      I create a safe, nurturing and innovative learning environment and
       strive to make a difference in each child's life`;
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget" element={<ForgotPassword />} />
          <Route path="/change" element={<ChangePassword />} />
          <Route path="/success" element={<PasswordChanged />} />

          <Route path="/tutors" element={<Tutors />} />
        </Routes>

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;