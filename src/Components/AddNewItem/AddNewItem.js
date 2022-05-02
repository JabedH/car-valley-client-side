import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import "./AddNewItem.css";

const AddNewItem = () => {
  const [user] = useAuthState(auth);
  const handleNewItem = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const img = event.target.img.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const info = event.target.info.value;
    const newInfo = { name, img, price, quantity, info };
    // console.log("submited", info);

    fetch("http://localhost:5000/Cars", {
      method: "POST",
      headers: {
        authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toast("Added item successfully");
        event.target.reset();
      });
  };
  return (
    <div className="inputupdate container">
      <div>
        <h1 className="text-center mt-3">Add Your Item</h1>
        <form onSubmit={handleNewItem} className="carinfo">
          <label htmlFor="">Name</label>
          <input name="name" type="text" required />
          <label htmlFor="">Img Url</label>
          <input name="img" type="text" placeholder="Img Url" required />
          <label htmlFor="">Price</label>
          <input name="price" type="text" required />
          <label htmlFor="">Quantity</label>
          <input name="quantity" type="text" required />
          <label htmlFor="">Supplier Name</label>
          <input name="supplier" type="text" required />
          <label htmlFor="">Short Description</label>
          <textarea name="info" id="" cols="30" rows="2"></textarea>
          <button type="submit">Submit Item</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddNewItem;
