import React from "react";

import "./Footer.styles.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import whiteLogo from "../../assets/images/logo.png";
import SendIcon from "@mui/icons-material/Send";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitchIcon from "../../assets/images/twitch.svg";
let socials = [
  {
    name: "fb",
    icon: <FacebookIcon />,
    href: "https://m.facebook.com/educifyinc",
  },
  {
    name: "insta",
    icon: <InstagramIcon />,
    href: "https://instagram.com/educifyinc/",
  },
  {
    name: "twitter",
    icon: <TwitterIcon />,
    href: "https://twitter.com/",
  },
  {
    name: "twitch",
    icon: <img src={TwitchIcon} className="twitch" />,
    href: "https://www.twitch.tv/",
  },
  {
    name: "youtube",
    icon: <YouTubeIcon />,
    href: "https://www.youtube.com/",
  },
  {
    name: "Telegram",
    icon: <TelegramIcon />,
    href: "https://www.telegram.org/",
  },
];
let footerCols = [
  {
    name: "Students",
    links: ["How It Works", "Safety", "Lesson Fees", "Packages/Combo"],
    href: ["/#", "/#", "/#", "/#"],
  },
  {
    name: "Teachers",
    links: ["How It Works", "Background Check", "Sign Up", "Packages/Combo"],
    href: ["/#", "/#", "/#", "/#"],
  },
  {
    name: "Apps",
    links: ["Play Store", "App Store"],
    href: ["/#", "/#"],
  },
];

let contactus = [
  {
    icon: <PhoneInTalkIcon htmlColor="#11d4fb" />,
    text: "(+001) 000 000 000",
    isLink: false,
  },
  {
    icon: <EmailIcon htmlColor="#11d4fb" />,
    text: "mailto:learnway@gmail.com",
    isLink: true,
  },
  {
    icon: <LocationOnIcon htmlColor="#11d4fb" />,
    text: "9FW6+599 Egham, United Kingdom",
    isLink: false,
  },
];

const Column = () => {
  return (
    <>
      {footerCols.map((col, i) => (
        <div key={i} className="Footer_Column">
          <h1>{col.name}</h1>
          {col.links.map((link, i) => (
            <a href={col.href[i]}>{link}</a>
          ))}
        </div>
      ))}
    </>
  );
};

const NewsLetter = () => {
  return (
    <div className="Logos_Container">
      <div className="title">
        <h2>
          Sign Up For <br /> our newsletter
        </h2>
        <p>
          Offers, promotion and educational <br /> contents
        </p>
      </div>

      <div className="send__email">
        <input type="text" placeholder="Email Address" />
        <div className="email__icon">
          <SendIcon />
        </div>
      </div>
    </div>
  );
};

function InfoSection() {
  return (
    <div className="Info_Container" id="footer">
      <NewsLetter />
      <Column />
      <div className="ContactInfo">
        <h1>Get In Touch</h1>
        {contactus.map((contact) => (
          <div className="footer__col">
            {contact.icon}
            {contact.isLink ? (
              <a href={contact.text}>{contact.text.split(":")[1]}</a>
            ) : (
              <span> {contact.text}</span>
            )}
          </div>
        ))}

        <div className="footer__socials">
          {socials.map((social) => (
            <a target={"_blank"} href={social.href}>
              {social.icon}
            </a>
          ))}
        </div>
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
