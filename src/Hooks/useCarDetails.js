import React, { useEffect, useState } from "react";

const useCarDetails = (updateId) => {
  const [carInfo, setCarInfo] = useState({});
  useEffect(() => {
    const url = `https://car-valley1.herokuapp.com/Cars/${updateId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCarInfo(data));
  }, [updateId]);
  return [carInfo, setCarInfo];
};

export default useCarDetails;
