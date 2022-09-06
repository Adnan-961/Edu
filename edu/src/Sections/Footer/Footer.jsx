import React, { useEffect } from "react";

import "./Footer.styles.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import whiteLogo from "../../assets/images/logo.png";
import SendIcon from "@mui/icons-material/Send";

const Column1 = () => {
  return (
    <div className="Footer_Column">
      <h1>Explore</h1>
      <a>Home</a>
      <a
        to="/#about"
        scroll={(el) =>
          el.scrollIntoView({ behavior: "auto", block: "center" })
        }
      >
        About Us
      </a>
      <a
        to="/#team"
        scroll={(el) =>
          el.scrollIntoView({
            behavior: "auto",
            block: "center",
          })
        }
      >
        Become A Teacher
      </a>
      <a to="/#contact">Become A Student</a>
      <a
        to="/#newsletter"
        scroll={(el) =>
          el.scrollIntoView({
            behavior: "auto",
            block: "center",
          })
        }
      >
        Subscribe
      </a>
    </div>
  );
};

const Logos = () => {
  return (
    <div className="Logos_Container">
      <div className="title">
        {/* <img alt="reboost logo" src={whiteLogo} className="Footer_logo" /> */}
        {/* <h1>Let's connect</h1> */}
        <h1>
          Sign Up For a <br /> Newsletter
        </h1>
        <p>Offers, promotion and educational contents</p>
      </div>

      <div className="send__email">
        <input type="text" placeholder="Email Address" />
        <div className="email__icon">
          <SendIcon />
        </div>
      </div>
      {/* <div className="Logos">
        <a
          href="https://www.instagram.com/educifyinc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon className="Footer_icons" />
        </a>
        <a
          href="https://www.facebook.com/educifyinc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon className="Footer_icons" />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className="Footer_icons" />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon className="Footer_icons" />
        </a>
      </div> */}
    </div>
  );
};
const Links = ["About", "Portfolio", "Contact", "Templates"];

function InfoSection() {
  return (
    <div className="Info_Container" id="footer">
      <Logos />
      <Column1 title="Info" links={Links} />
      <div className="ContactInfo">
        <h1>Contact Info</h1>
        <a href="mailto:bowlakemusic@gmail.com" id="Contact">
          <EmailIcon className="icons" />
          <p className="">bowlakemusic@gmail.com</p>
        </a>
        <a title="Call SF" href="tel:+96171523153">
          <PhoneIcon className="icons" />
          <p className=""> +(000)-00-000000</p>
        </a>
        <a href="https://api.whatsapp.com/send?phone=000000000">
          <WhatsAppIcon className="icons" />
          <p>Contact us on WhatsApp</p>
        </a>
      </div>
    </div>
  );
}
function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="Footer_Container" id="footer">
      <InfoSection />
      <p className="Footer_Copyright">Copyright ©{year} All rights reserved</p>
    </div>
  );
}

export default Footer;
