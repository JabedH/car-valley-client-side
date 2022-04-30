import React from "react";
import "./Update.css";
import { useParams } from "react-router-dom";
import useCar from "../../Hooks/useCar";
import useCarDetails from "../../Hooks/useCarDetails";

const Update = () => {
  const { updateId } = useParams();
  const [carInfo] = useCarDetails(updateId);
  return (
    <div className="update container">
      <div>
        <h1 className="text-center">Update Your Car</h1>
        <form action="" className="carinfo">
          <label htmlFor="">Name</label>
          <input type="text" value={carInfo.name} />
          <label htmlFor="">Img Url</label>
          <input type="text" placeholder="Img Url" />
          <label htmlFor="">Price</label>
          <input type="text" value={carInfo.price} />
          <label htmlFor="">Quantity</label>
          <input type="text" value={carInfo.quantity} />
          <label htmlFor="">Supplier Name</label>
          <input type="text" value={carInfo.supplier} />
          <label htmlFor="">Short Description</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="2"
            value={carInfo.info}
          ></textarea>
          <button type="submit">Update Car</button>
        </form>
      </div>
      <div className="de">
        <div className="text-center">
          <h1>{carInfo.name}</h1>
          <button>Delivered car</button>
        </div>
        <div>
          <h3>Add Quantity</h3>
          <form action="">
            <input type="number" />
            <button type="submit">Deliver car</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
