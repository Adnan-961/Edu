import React from "react";
import { Welcome } from "../../Components/Welcome/Welcome";
import forgetpassword from "../../assets/images/forgetpassword.png";
import "./ForgotPassword.styles.scss";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="reset__container">
      <Welcome
        text={
          "Forgot Password? Educify got you covered. Reset Password by entering your email"
        }
        img={forgetpassword}
      />
      <PasswordContainer />
    </div>
  );
}

const PasswordContainer = () => {
  return (
    <div className="reset__password">
      <div className="inputs">
        <h1>Forgot Your Password?</h1>
        <p>
          Back to Log In page?
          <span>
            <Link to="/login"> Log In</Link>
          </span>
        </p>
        <div className="email">
          <h4>Email</h4>
          <input type="text" name="email" />
        </div>
        <div className="signin__btn">
          <button>Reset Password</button>
        </div>
        <span className="resend">
          Did’t receive an email? <span>Resend</span>
        </span>
      </div>
      <div className="terms">
        <span>Terms</span>
        <span>Plans</span>
        <span>Contact Us</span>
      </div>
    </div>
  );
};
