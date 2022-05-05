import React from "react";
import CarDetails from "../CarDetails/CarDetails";
import Footer from "../Header/Footer/Footer";
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
      <Footer />
    </div>
  );
};

export default Home;
