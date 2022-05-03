import React, { useState } from "react";
import "./Update.css";
import { Link, useParams } from "react-router-dom";
import useCar from "../../Hooks/useCar";
import useCarDetails from "../../Hooks/useCarDetails";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { toast, ToastContainer } from "react-toastify";

const Update = () => {
  const [product, setProduct] = useState({});
  const [loading] = useAuthState(auth);
  const { updateId } = useParams();
  const [carInfo, setCarInfo] = useCarDetails(updateId);
  console.log(updateId);

  // const removeOne = () => {
  //   let newQuantity = parseInt(carInfo.quantity) - 1;
  //   const newProduct = { ...carInfo.quantity, newQuantity };
  //   console.log(newQuantity);
  //   if (loading) {
  //     return <Loading />;
  //   }
  //   fetch(`http://localhost:5000/Cars/${updateId}`, {
  //     method: "PUT",
  //     body: JSON.stringify(newQuantity),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Success:", data);
  //       toast("Added item successfully");
  //     });
  // };
  function removeOne() {
    let newQuantity = carInfo.quantity - 1;
    const newProduct = { ...product, quantity: newQuantity };
    setProduct(newProduct);
    fetch(`http://localhost:5000/Cars/${updateId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
  }

  const addQuantity = (event) => {
    const newQuantity = parseInt(carInfo.quantity);
    event.preventDefault();
    const quantity = parseInt(event.target.number.value);
    const totalQuantity = newQuantity + quantity;
    const updatQuantity = { quantity };
    console.log(typeof totalQuantity, typeof quantity, typeof newQuantity);

    fetch(`http://localhost:5000/Cars/${updateId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatQuantity),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("updatQuantity added successfully");
        event.target.reset();
      });
  };

  return (
    <div className="update container">
      <div className="sold-car">
        <img src={carInfo.img} alt="" />
        <h3>{carInfo.name}</h3>
        <p>{carInfo.info}</p>
        <p>${carInfo.price}</p>
        <p>{carInfo.quantity === null ? 0 : carInfo.quantity}</p>
        <p>Supplier name: {carInfo.supplier} </p>
        <h5>Sold This Car</h5>
      </div>
      <div className="deliver">
        <div className="text-center deliver-car">
          <h1>{carInfo.name}</h1>
          <button onClick={() => removeOne(updateId)}> Button </button>
          {/* <button onClick={() => removeOne(updateId)}>Delivered car</button> */}
        </div>
        <div>
          <h3 className="text-center">Add Stock</h3>
          <form onSubmit={addQuantity} className="quantity">
            <input
              type="number"
              name="number"
              onChange
              required
              // defaultValue="0"
            />

            <input type="submit" value="submit" />
          </form>
        </div>
        <div className="manage-inventory">
          <Link to="/inventory">Manage Inventory</Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Update;
