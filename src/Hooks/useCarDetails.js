import React, { useEffect, useState } from "react";

const useCarDetails = (updateId) => {
  const [carInfo, setCarInfo] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/Cars/${updateId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCarInfo(data));
  }, [updateId]);
  return [carInfo];
};

export default useCarDetails;
