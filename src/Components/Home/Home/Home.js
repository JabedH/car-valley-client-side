import React, { useState } from "react";

import CarDetails from "../CarDetails/CarDetails";
import Mission from "../Mission/Mission";
import Slider from "../Slider/Carousel";
import Welcome from "../Welcome/Welcome";

const Home = () => {
  return (
    <div>
      <Slider />
      <Welcome />
      <CarDetails />
      <Mission />
    </div>
  );
};

export default Home;
