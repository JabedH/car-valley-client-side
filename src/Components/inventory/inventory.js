import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useMemo, useRef } from "react";
import { Table } from "react-bootstrap";
import useCar from "../../Hooks/useCar";
import "./inventory.css";

const Inventory = () => {
  const [cars] = useCar();
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you want to delete?");
  };
  return (
    <div className="container mt-5">
      <h1 className="text-center">All Cars</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Item name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Image</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
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
              <td className="delete">
                {" "}
                <button onClick={() => handleDelete(car._id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Inventory;
