import React from "react";
import "./Footer.styles.scss";
import logo from "../../assets/images/logo.png";
import phone from "../../assets/svgs/phone.svg";
import location from "../../assets/svgs/location.svg";
import mail from "../../assets/svgs/mail.svg";

import { socials } from "../../assets/data/footer";
import { contact } from "../../assets/data/footer";
import { footerCols } from "../../assets/data/footer";
import { text } from "../../assets/data/footer";

export default function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__logo">
          <img src={logo} alt="" />
          <p>{text.text}</p>
        </div>
        <div className="columns">
          {footerCols.map((col, i) => (
            <div className="col">
              <h4>{col.name}</h4>
              <ul>
                {col.links.map((link, j) => (
                  <li>
                    <a href={col.href[j]}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col footer__contact">
            <h4>{contact.header}</h4>
            <ul>
              <li>
                <img src={phone} alt="" />
                {contact.number}
              </li>
              <li>
                <img src={mail} alt="" />
                {contact.email}
              </li>
              <li>
                <img src={location} alt="" />
                {contact.location}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom__section">
        <p>{text.copyright}</p>
        <p>{text.terms}</p>
        <div className="socials">
          {socials.map((social) => (
            <a href={social.link}>
              {" "}
              <img src={social.image} alt="socials" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
