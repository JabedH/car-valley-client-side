import React, { useState } from "react";
import "./Inventory.css";
import { Link, useParams } from "react-router-dom";
import useCar from "../../Hooks/useCar";
import useCarDetails from "../../Hooks/useCarDetails";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { toast, ToastContainer } from "react-toastify";

const Inventory = () => {
  const [product, setProduct] = useState({});
  const [loading] = useAuthState(auth);
  const { updateId } = useParams();
  const [carInfo, setCarInfo] = useCarDetails(updateId);
  console.log(updateId);
  const removeOne = () => {
    let newQuantity = carInfo.quantity - 1;
    const newProduct = { ...product, quantity: newQuantity };
    console.log(typeof newProduct);
    setProduct(newProduct);
    fetch(`http://localhost:5000/Cars/${updateId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
  };
  const incrise = (event) => {
    event.preventDefault();
    const getQuantity = Number(event.target.number.value);
    const getCartValue = Number(carInfo.quantity);
    console.log(typeof carInfo.quantity);
    let newQuantity = getCartValue + getQuantity;
    const newProduct = { ...product, quantity: newQuantity };

    fetch(`http://localhost:5000/Cars/${updateId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
  };
  return (
    <div className="update container">
      <div className="sold-car">
        <img src={carInfo.img} alt="" />
      </div>
      <div className="deliver">
        <div className="text-center deliver-car">
          <div className="my-car-info">
            <h3>{carInfo.name}</h3>
            <p>{carInfo.info}</p>
            <p>
              <b>Price:</b> ${carInfo.price}
            </p>
            <p>
              <b>Quantity:</b>
              {carInfo.quantity === null ? 0 : carInfo.quantity}
            </p>

            <p>
              <b>Supplier:</b> {carInfo.supplier}{" "}
            </p>
            <h5 style={{ color: "red" }} className="mb-3">
              {carInfo.quantity == "0" || null ? "Sold This Car" : ""}
            </h5>
          </div>
        </div>
        <div className="car-Delivery">
          <div className="Delivery-btn">
            <button onClick={() => removeOne(updateId)}> Delivery </button>
          </div>
          <div>
            <form onSubmit={incrise} className="quantity">
              <input
                type="number"
                name="number"
                className="w-50"
                placeholder="Input Quantity"
                required
              />
              <button type="submit"> Restock </button>
              {/* <input type="submit" value="Restock" /> */}
            </form>
          </div>
        </div>
        <div className="manage-inventory">
          <Link to="/manageinventories">Manage Inventory</Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Inventory;
