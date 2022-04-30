import React from "react";
import { Carousel } from "react-bootstrap";
import "./Mission.css";
import img1 from "../../../img/mission/1.png";
import img2 from "../../../img/mission/2.jpg";
import img3 from "../../../img/mission/3.jpg";

const Mission = () => {
  return (
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
  );
};

export default Mission;
