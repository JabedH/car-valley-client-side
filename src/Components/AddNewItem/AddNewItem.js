import React from "react";
import "./AddNewItem.css";

const AddNewItem = () => {
  return (
    <div className="update container">
      <div>
        <h1 className="text-center">Update Your Car</h1>
        <form action="" className="carinfo">
          <label htmlFor="">Name</label>
          <input type="text" />
          <label htmlFor="">Img Url</label>
          <input type="text" placeholder="Img Url" />
          <label htmlFor="">Price</label>
          <input type="text" />
          <label htmlFor="">Quantity</label>
          <input type="text" />
          <label htmlFor="">Supplier Name</label>
          <input type="text" />
          <label htmlFor="">Short Description</label>
          <textarea name="" id="" cols="30" rows="2"></textarea>
          <button type="submit">Update Car</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewItem;
