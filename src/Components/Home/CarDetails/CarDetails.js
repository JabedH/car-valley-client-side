import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./CarDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";
import { Link, useNavigate } from "react-router-dom";
import useCar from "../../../Hooks/useCar";

const CarDetails = () => {
  const [cars] = useCar();
  const newcars = cars.slice(0, 6);
  console.log(newcars);
  const navigate = useNavigate();
  const handleUpdate = (id) => {
    console.log("clicked");
    navigate(`/Inventory/${id}`);
  };
  return (
    <div className="container">
      <h1 className="mt-5 mb-3 text-center">Recently Added</h1>
      <h5 className="mb-5 text-center">Car Valley premium cars inventory</h5>
      <div className="car-details container">
        {newcars.map((car) => (
          <div key={car._id}>
            <Card className="full-car" style={{ width: "22rem" }}>
              <div className="card-img">
                <Card.Img
                  style={{ height: "12rem" }}
                  variant="top"
                  src={car.img}
                />
              </div>
              <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <p>
                  <b>Supplier</b>{" "}
                  <span style={{ color: "#03A4E0" }}>{car.supplier}</span>
                </p>
                <Card.Text>{car.info}</Card.Text>
                <h3 className="price">${car.price}</h3>
                <div className="main-icon">
                  <div className="icon-style">
                    <div className="icon">
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </div>
                    <p>
                      In Stock <b>{car.quantity === null ? 0 : car.quantity}</b>
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
                  <button onClick={() => handleUpdate(car._id)}>
                    Stock Update
                  </button>
                  {/* <Link to="/update"></Link>{" "} */}
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div className="car-inventory mb-4 mt-5">
        <Link className="inventory-link" to="/manageinventories">
          Manage Inventory
        </Link>
      </div>
    </div>
  );
};

export default CarDetails;
