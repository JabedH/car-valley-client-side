import React from "react";
import "./Update.css";
import { Link, useParams } from "react-router-dom";
import useCar from "../../Hooks/useCar";
import useCarDetails from "../../Hooks/useCarDetails";

const Update = () => {
  const { updateId } = useParams();
  const [carInfo, setCarInfo] = useCarDetails(updateId);
  console.log(typeof carInfo.quantity);

  function removeOne() {
    let newQuantity = carInfo.quantity - 1;
    const newProduct = { ...carInfo.quantity, newQuantity };
    setCarInfo(newProduct);
    fetch(
      `http://localhost:5000/Cars/${updateId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      },
      []
    );
  }
  // const addQuantity = (event) => {
  //   event.preventDefault();
  //   const quantity = event.target.number.value;
  // const myQuan = Number(quantity);
  // const StringQ = toString(myQuan);
  // const previousQuantity = carInfo.quantity;
  // const newPrevious = JSON.parse(previousQuantity);
  // const totalQuantity = Number(quantity) + Number(newPrevious);
  // const newTotal = toString(totalQuantity);
  // const updateCar = { quantity};
  //   console.log(typeof quantity);

  //   fetch(`http://localhost:5000/Cars/${updateId}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(updateCar),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Success:", data);
  //       alert("updateCar added successfully");
  //       event.target.reset();
  //     });
  // };

  return (
    <div className="update container">
      <div className="sold-car">
        <img src={carInfo.img} alt="" />
        <h3>{carInfo.name}</h3>
        <p>{carInfo.info}</p>
        <p>${carInfo.price}</p>
        <p>Quantity: 1</p>
        <p>Supplier name: {carInfo.supplier} </p>
        <h5>Sold This Car</h5>
      </div>
      <div className="deliver">
        <div className="text-center deliver-car">
          <h1>{carInfo.name}</h1>
          <button onClick={() => removeOne()}>Delivered car</button>
        </div>
        <div>
          <h3 className="text-center">Add Stock</h3>
          {/* <form onSubmit={addQuantity} className="quantity">
            <input
              type="number"
              name="number"
              onChange
              required
              defaultValue="0"
            />

            <input type="submit" value="submit" />
          </form> */}
        </div>
        <div>
          <Link to="/inventory">Manage Inventory</Link>
        </div>
      </div>
    </div>
  );
};

export default Update;
