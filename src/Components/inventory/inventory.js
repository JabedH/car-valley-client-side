import React, { useEffect, useState } from "react";
import "./Inventory.css";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Inventory = () => {
  const [product, setProduct] = useState({});
  const { updateId } = useParams();
  const [carInfo, setCarInfo] = useState({});
  const { name, info, price, supplier, quantity, img } = carInfo;
  const [error, setError] = useState(" ");

  useEffect(() => {
    const url = `https://car-valley1.herokuapp.com/Cars/${updateId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCarInfo(data));
  }, [product]);

  const removeOne = () => {
    if (carInfo.quantity > 0) {
      let newQuantity = carInfo.quantity - 1;
      const newProduct = { ...carInfo, quantity: newQuantity };
      setCarInfo(newProduct);

      fetch(`https://car-valley1.herokuapp.com/Cars/${updateId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
    }
  };

  const incrise = (event) => {
    event.preventDefault();
    const getQuantity = parseInt(event.target.number.value);
    if (getQuantity > 0) {
      const getCartValue = parseInt(carInfo.quantity);
      let newQuantity = getCartValue + getQuantity;
      const newProduct = { ...carInfo, quantity: newQuantity };
      setCarInfo(newProduct);
      fetch(`https://car-valley1.herokuapp.com/Cars/${updateId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      setError();
    } else {
      setError("please input positive value");
    }
    event.target.reset();
  };

  return (
    <div className="update container">
      <div className="sold-car">
        <img src={img} alt="" />
      </div>
      <div className="deliver">
        <div className="text-center deliver-car">
          <div className="my-car-info">
            <h3>{name}</h3>
            <p>{info}</p>
            <p>
              <b>Price:</b> ${price}
            </p>
            <p>
              <b>Quantity:</b>
              {quantity}
            </p>

            <p>
              <b>Supplier:</b> {supplier}{" "}
            </p>
            <h5 style={{ color: "red" }} className="mb-3">
              {quantity == "0" ? "Sold This Car" : ""}
            </h5>
          </div>
        </div>
        <div className="car-Delivery">
          <div className="Delivery-btn">
            <button onClick={() => removeOne(updateId)}> Delivery </button>
          </div>
          <div>
            <form onSubmit={incrise} className="myForm-control">
              <div className="quantity">
                <input
                  type="number"
                  name="number"
                  className="w-50"
                  placeholder="Input Quantity"
                  required
                />

                {/* <button type="submit"> Restock </button> */}
                <input type="submit" value="Restock" />
              </div>
              <div style={{ color: "red" }}>{error}</div>
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
