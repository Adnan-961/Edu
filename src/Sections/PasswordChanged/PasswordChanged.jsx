import React from "react";
import "./PasswordChanged.styles.scss";
import changed from "../../assets/images/changed.png";
export default function PasswordChanged() {
  return (
    <div className="password__changed">
      <div className="container">
        <h1>Password is Changed</h1>
        <p>
          Please check your email inbox for a password recovery link. Don't
          forget to check your spam folder.
        </p>
        <button className="btn__primary">Sign In</button>
        <p className="not_received">
          Did’t receive an email? <span>Try Again</span>
        </p>
      </div>
      <div className="img">
        <img src={changed} alt="" />
      </div>
    </div>
  );
}
