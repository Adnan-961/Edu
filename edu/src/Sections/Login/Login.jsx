import React from "react";
import login_bg from "../../assets/images/login_bg.png";
import "./Login.styles.scss";
import google from "../../assets/svgs/google-icon.svg";
import facebook from "../../assets/svgs/facebook.svg";
import { Welcome } from "../../Components/Welcome/Welcome";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="login__container">
      <Welcome
        text={
          "Sign in and start learning from the best lessons specifically curated for you"
        }
        img={login_bg}
      />
      <LoginContainer />
    </div>
  );
}

const LoginContainer = () => {
  return (
    <div className="inner__login">
      <h1>Sign In to Learn</h1>
      <p>
        New Here?{" "}
        <span>
          <Link style={{ color: "inherit" }} to={"/signup"}>
            Create an Account
          </Link>
        </span>
      </p>
      <div className="inputs">
        <div className="email">
          <h4>Email Address</h4>
          <input type="text" name="email" />
        </div>
        <div className="password">
          <div className="header">
            {" "}
            <h4>Password</h4>{" "}
            <span>
              <Link to="/forget">Forgot Password</Link>
            </span>
          </div>
          <input type="password" name="password" />
        </div>
        <div className="signin__btn">
          <button>Sign In</button>
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