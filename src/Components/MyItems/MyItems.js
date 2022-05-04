import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./MyItems.css";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [getcar, setGetcar] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/addcar", {
      headers: {
        authorization: `${user?.email} ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setGetcar(data));
  }, [user?.email]);
  return (
    <div>
      <div>
        <div className="container mt-4">
          <h1 className="text-center">All Added Item</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Item name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {getcar.map((car) => (
                <tr key={car._id} className="table">
                  <td>#</td>
                  <td>{car.name}</td>
                  <td>{car.quantity === null ? 0 : car.quantity}</td>
                  <td>{car.price}</td>
                  <td>
                    <div className="table-img">
                      <img src={car.img} alt="" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MyItems;
