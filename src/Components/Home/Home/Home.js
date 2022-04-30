import React from "react";
import CarDetails from "../CarDetails/CarDetails";
import Slider from "../Slider/Carousel";
import Welcome from "../Welcome/Welcome";

const Home = () => {
  return (
    <div>
      {/* <Slider /> */}
      <Welcome />
      <CarDetails />
    </div>
  );
};

export default Home;
