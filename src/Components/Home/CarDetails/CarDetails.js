import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./CarDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const CarDetails = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/Cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div>
      <div className="car-details container">
        {cars.map((car) => (
          <div key={car._id}>
            <Card className="full-car" style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "12rem" }}
                variant="top"
                src={car.img}
              />
              <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Card.Text>{car.info}</Card.Text>
                <h3 className="price">${car.price}</h3>
                <div className="icon-style">
                  <div className="icon">
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </div>
                  <p>
                    In Stock <b>{car.quantity}</b>
                  </p>
                </div>
                <button>Update Car</button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarDetails;
