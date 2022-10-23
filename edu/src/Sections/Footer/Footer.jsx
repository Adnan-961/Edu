import React from "react";
import "./Footer.styles.scss";
import logo from "../../assets/images/logo.png";
import phone from "../../assets/svgs/phone.svg";
import location from "../../assets/svgs/location.svg";
import mail from "../../assets/svgs/mail.svg";
import uk from "../../assets/svgs/england.svg";
import usa from "../../assets/svgs/usa.svg";

import { socials } from "../../assets/data/footer";
import { contact } from "../../assets/data/footer";
import { footerCols } from "../../assets/data/footer";
import { text } from "../../assets/data/footer";

import Select from "react-select";
export default function Footer() {
  const options = [
    {
      value: "USA",
      label: (
        <div className="select__option">
          <img src={uk} />
          England
        </div>
      ),
    },
    {
      value: "USA",
      label: (
        <div className="select__option">
          <img src={usa} />
          USA{" "}
        </div>
      ),
    },
    {
      value: "USA",
      label: (
        <div className="select__option">
          <img src={uk} />
          England{" "}
        </div>
      ),
    },
    {
      value: "USA",
      label: (
        <div className="select__option">
          <img src={usa} />
          USA{" "}
        </div>
      ),
    },
  ];
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
            <div className="location__currency">
              <Select
                options={options}
                styles={{ color: "red" }}
                defaultValue={options[0].label.type}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom__section">
        <p>{text.copyright}</p>

        <div className="terms">
          <span>Educify</span>
          {"  |  "}
          <span>Terms and Conditions</span>
          {"  |  "}
          <span>Privacy Policy</span>
        </div>
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
