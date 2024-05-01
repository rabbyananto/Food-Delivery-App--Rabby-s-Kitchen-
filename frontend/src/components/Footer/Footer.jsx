import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <Link onClick={() => window.scrollTo(0, 0)}>
              <img src={assets.logo2} alt="" />
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              error cum possimus magnam incidunt maxime repellendus provident
              reprehenderit numquam culpa ab beatae dolorum voluptatem
              voluptatum voluptate.
            </p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+49-1590-6414589</li>
              <li>mdabdullaalrabby@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">
          ❤️ Copyright {currentYear} © Md Abdulla Al Rabby -All rights reserved
          🔥
        </p>
      </div>
    </>
  );
};

export default Footer;
