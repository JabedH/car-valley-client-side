import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./CarDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";

const CarDetails = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/Cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div>
      <h1 className="mt-5 mb-3 text-center">Recently Added</h1>
      <h5 className="mb-5 text-center">Car Valley premium cars inventory</h5>
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
                <p>
                  by <span style={{ color: "#03A4E0" }}>{car.supplier}</span>
                </p>
                <Card.Text>{car.info}</Card.Text>
                <h3 className="price">${car.price}</h3>
                <div className="main-icon">
                  <div className="icon-style">
                    <div className="icon">
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </div>
                    <p>
                      In Stock <b>{car.quantity}</b>
                    </p>
                  </div>
                  <div>
                    <Rating
                      initialRating={car.ratting}
                      emptySymbol={<FontAwesomeIcon icon={faStar} />}
                      fullSymbol={
                        <FontAwesomeIcon
                          style={{ color: "goldenrod" }}
                          icon={faStar}
                        />
                      }
                      readonly
                    ></Rating>
                  </div>
                </div>
                <div className="text-center">
                  <button>Update Car</button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarDetails;
