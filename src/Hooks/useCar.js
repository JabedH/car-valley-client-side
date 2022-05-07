import React, { useEffect, useState } from "react";

const useCar = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://car-valley1.herokuapp.com/Cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return [cars, setCars];
};

export default useCar;
