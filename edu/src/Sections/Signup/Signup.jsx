import React from "react";
import { Welcome } from "../../Components/Welcome/Welcome";
import signup from "../../assets/images/signup.png";
import "./signup.styles.scss";
import google from "../../assets/svgs/google-icon.svg";
import facebook from "../../assets/svgs/facebook.svg";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="signup__container">
      <Welcome
        text={
          "Sign Up and start learning from the best lessons specifically curated for you"
        }
        img={signup}
      />
      <LoginContainer />
    </div>
  );
}

const LoginContainer = () => {
  return (
    <div className="inner__login">
      <h1>Sign Up and Start Learning!</h1>
      <p>
        Already have an account?{" "}
        <span>
          <Link style={{ color: "inherit" }} to="/login">
            {" "}
            Log In
          </Link>
        </span>
      </p>
      <div className="inputs">
        <div className="email">
          <h4>Full Name</h4>
          <input type="text" name="email" />
        </div>
        <div className="email">
          <h4>Email Address</h4>
          <input type="text" name="email" />
        </div>

        <div className="password">
          <div className="header">
            {" "}
            <h4>Password</h4>
          </div>
          <input type="password" name="password" />
        </div>
        <div className="password">
          <div className="header">
            <h4>Confirm Password</h4>
          </div>
          <input type="password" name="password" />
        </div>
        <div className="agree__condition">
          <input type="checkbox" name="terms" id="" />{" "}
          <span>
            I agree to the <span>Terms & Conditions</span>
          </span>
        </div>
        <div className="signin__btn">
          <button>Create an Account</button>
        </div>
        <div className="or">
          <span>or</span>
        </div>
        <div className="signin__with">
          <img src={google} alt="" />
          <span>Sign in With Google</span>
        </div>
        <div className="signin__with">
          <img src={facebook} alt="" />
          <span>Sign in With Google</span>
        </div>
      </div>
      <div className="terms">
        <span>Terms</span>
        <span>Plans</span>
        <span>Contact Us</span>
      </div>
    </div>
  );
};
