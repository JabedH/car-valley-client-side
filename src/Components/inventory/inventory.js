import React, { useEffect, useState } from "react";
import "./Inventory.css";
import { Link, useParams } from "react-router-dom";
import useCarDetails from "../../Hooks/useCarDetails";
import { ToastContainer } from "react-toastify";

const Inventory = () => {
  const [product, setProduct] = useState({});
  const { updateId } = useParams();
  // const [carInfo] = useCarDetails(updateId);
  const [carInfo, setCarInfo] = useState({ updateId });
  useEffect(() => {
    const url = `http://localhost:5000/Cars/${updateId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCarInfo(data));
  }, [setCarInfo]);
  const removeOne = (event) => {
    // event.preventDefault();
    let newQuantity = carInfo.quantity - 1;
    const newProduct = { ...product, quantity: newQuantity };
    setProduct(newProduct.quantity);
    fetch(`http://localhost:5000/Cars/${updateId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newProduct }),
    });
  };
  const incrise = (event) => {
    event.preventDefault();
    const getQuantity = Number(event.target.number.value);
    const getCartValue = Number(carInfo.quantity);
    let newQuantity = getCartValue + getQuantity;
    const newProduct = { ...product, quantity: newQuantity };
    setProduct(newProduct);
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
          <form onSubmit={incrise} className="quantity">
            <input
              type="number"
              name="number"
              required
              // defaultValue="0"
            />

            <input type="submit" value="submit" />
          </form>
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
