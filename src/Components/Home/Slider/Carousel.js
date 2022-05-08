import React from "react";
import "./Carousel";
import { Carousel } from "react-bootstrap";
import bg1 from "../../../img/bg/bg3.jpg";
import bg2 from "../../../img/bg/bg2.jpg";
import bg3 from "../../../img/bg/bg5.jpg";
import Loading from "../../Loading/Loading";

const Slider = () => {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={bg1} alt="First slide" />
          <Carousel.Caption>
            <h3>FIND THE BEST CAR FOR YOU</h3>
            <p>ULTIMATE HORSE ON TRACK</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bg2} alt="Second slide" />

          <Carousel.Caption>
            <h3>YOUR DREAM IS HERE</h3>
            <p>CHOOSE YOUR DREAM</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bg3} alt="Third slide" />

          <Carousel.Caption>
            <h3>CARS MAKE YOU WILL HAPPY</h3>
            <p>CHOOSE YOUR HAPPINESS AND SPREAD IT EVERYWHERE.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
