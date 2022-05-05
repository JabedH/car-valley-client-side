import React from "react";
import "./Footer.css";
import fb from "../../../../img/icon/fb.svg";
import twitter from "../../../../img/icon/twitter.svg";
import link from "../../../../img/icon/link.svg";
import youtube from "../../../../img/icon/youtube.svg";
import instra from "../../../../img/icon/instra.svg";
import man from "../../../../img/icon/customer.png";
import money from "../../../../img/icon/money.png";
import car from "../../../../img/icon/car.png";
import location from "../../../../img/icon/location.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faCashRegister,
  faLocation,
  faMoneyBill,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="">
      <div className="">
        <div className="money-icon">
          <div className="container user-icon">
            <div>
              <img src={man} alt="" />
            </div>
            <div>
              <img src={car} alt="" />
            </div>
            <div>
              <img src={money} alt="" />
            </div>
            <div>
              <img src={location} alt="" />
            </div>
          </div>
        </div>
        <div className="address">
          <div className="footer-info container">
            <div className="mt-5">
              <h3>Address</h3>
              <ul>
                <li>811 7th Ave</li>
                <li>New York, NY 10019</li>
                <li>United States</li>
              </ul>
            </div>
            <div className="mt-5">
              <h3>Information</h3>
              <ul>
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="mt-5">
              <h3>Opening Hours</h3>

              <ul>
                <li>Mon - Sat: 9:00 AM - 6:00 PM</li>
                <li>Sunday is closed</li>
              </ul>
            </div>
            <div className="connect mt-5">
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
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
