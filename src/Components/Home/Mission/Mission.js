import React from "react";
import { Carousel } from "react-bootstrap";
import "./Mission.css";
import img1 from "../../../img/mission/1.png";
import img2 from "../../../img/mission/2.jpg";
import img3 from "../../../img/mission/3.jpg";
import man from "../../../img/icon/customer.png";
import money from "../../../img/icon/money.png";
import car from "../../../img/icon/car.png";
import location from "../../../img/icon/location.png";

const Mission = () => {
  return (
    <div>
      <div className="mission container">
        <div className="full-mission">
          <div className="mission-text">
            <h1>Our Mission</h1>
          </div>
          <h3>
            At Car Valley, we want to provide you with the best Car experience
            possible.
          </h3>
          <p>
            From researching the vehicle you want to test driving your options,
            we’re here to help with our knowledgeable sales staff and an
            impressive selection of cars.
          </p>
        </div>
        <div>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={img1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="money-icon ">
        <div className=" user-icon">
          <div className="container all-car-icon">
            <div className="icon-center">
              <img src={man} alt="" />
              <h3>100%</h3>
              <p>Customer Satisfaction</p>
            </div>
            <div className="icon-center">
              <img src={car} alt="" />
              <h3>2100</h3>
              <p>Cars Sold</p>
            </div>
            <div className="icon-center">
              <img src={money} alt="" />
              <h3>$950,000</h3>
              <p>Amount Sold</p>
            </div>
            <div className="icon-center">
              <img src={location} alt="" />
              <h3>7</h3>
              <p>Locations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
