import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./Welcome.css";

const Welcome = () => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    fetch("section1data.json")
      .then((res) => res.json())
      .then((data) => setVehicles(data));
  }, []);
  return (
    <div className="welcome-bg pb-5">
      <h1 className="text-center pt-5">Welcome to Car Valley</h1>
      <p className="text-center mb-5 w-50 mx-auto">
        Our happiness Your satisfaction. we are waiting for making you happy. we
        are trying to provide the best service.
      </p>
      <div className="d-flex flex-wrap justify-content-center gap-5 container ">
        {vehicles.map((vehicle) => (
          <div key={vehicle._id}>
            <Card className="welcome" style={{ width: "15rem" }}>
              <Card.Img variant="top" src={vehicle.img} />
              <Card.Body>
                <Card.Title className="vehicle-title">
                  {vehicle.name}
                </Card.Title>
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
