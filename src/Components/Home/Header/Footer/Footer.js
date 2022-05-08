import React from "react";
import "./Footer.css";
import fb from "../../../../img/icon/fb.svg";
import twitter from "../../../../img/icon/twitter.svg";
import link from "../../../../img/icon/link.svg";
import youtube from "../../../../img/icon/youtube.svg";
import instra from "../../../../img/icon/instra.svg";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="address">
          <div className="footer-info container">
            <div className="mt-4 mb-3 ">
              <h3>Address</h3>
              <ul>
                <li>811 7th Ave</li>
                <li>New York, NY 10019</li>
                <li>United States</li>
              </ul>
            </div>
            <div className="mt-4 mb-3">
              <h3>Information</h3>
              <ul>
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="mt-4 mb-3">
              <h3>Opening Hours</h3>

              <ul>
                <li>Mon - Sat: 9:00 AM - 6:00 PM</li>
                <li>Sunday is closed</li>
              </ul>
            </div>
            <div className="connect mt-4 mb-3">
              <h3>Connect With Us</h3>

              <div className="social-icon">
                <a href="">
                  <img src={fb} alt="" />
                </a>
                <a href="">
                  <img src={twitter} alt="" />
                </a>
                <a href="">
                  <img src={instra} alt="" />
                </a>
                <a href="">
                  <img src={link} alt="" />
                </a>
                <a href="">
                  <img src={youtube} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          Copyright CAR VALLEY ©2022. All Rights Reserved
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
