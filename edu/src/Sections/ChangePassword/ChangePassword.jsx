import React from "react";
import { Welcome } from "../../Components/Welcome/Welcome";
import change_password from "../../assets/images/change_password.png";
import "./ChangePassword.styles.scss";
import { Link } from "react-router-dom";

export default function ChangePassword() {
  return (
    <div className="reset__container">
      <Welcome
        text={
          "Forgot Password? Educify got you covered. Reset Password by entering your email"
        }
        img={change_password}
      />
      <PasswordContainer />
    </div>
  );
}

const PasswordContainer = () => {
  return (
    <div className="reset__password">
      <div className="inputs">
        <h1>Reset your password</h1>
        <p>
          Changing password for:
          <span> bradeniss@deliotte</span>
        </p>
        <div className="email">
          <h4>Password</h4>
          <input type="password" name="password" />
        </div>
        <div className="confirm__email">
          <h4>Confirm Password</h4>
          <input type="password" name="confirm_password" />
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
