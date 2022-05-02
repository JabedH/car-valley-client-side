import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Welcome = () => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/Vehicles")
      .then((res) => res.json())
      .then((data) => setVehicles(data));
  }, []);
  return (
    <div className="container ">
      <h1 className="text-center mt-4">Welcome to Car Valley</h1>
      <p className="text-center mb-5">
        our happiness Your satisfaction. we are waiting for you for making you
        happy. we are trying to provide the best service.
      </p>
      <div className="d-flex justify-content-center gap-5">
        {vehicles.map((vehicle) => (
          <div key={vehicle._id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "13rem" }}
                variant="top"
                src={vehicle.img}
              />
              <Card.Body>
                <Card.Title>{vehicle.name}</Card.Title>
                <Card.Text>{vehicle.info}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
