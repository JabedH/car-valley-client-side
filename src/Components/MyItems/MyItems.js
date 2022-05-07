import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useCar from "../../Hooks/useCar";
import "./MyItems.css";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [getCar, setGetcar] = useState([]);
  console.log(getCar);
  useEffect(() => {
    const email = user?.email;
    const getItem = async () => {
      const url = `https://car-valley1.herokuapp.com/addcar?email=${email}`;
      console.log(email);
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setGetcar(data);
    };
    getItem();
  }, [user]);
  const handleDeleteOne = (id) => {
    console.log(id);
    const confirmDelete = window.confirm("Are you want to delete?");
    if (confirmDelete) {
      const url = `https://car-valley1.herokuapp.com/addCar/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = getCar.filter((car) => car._id !== id);
            setGetcar(remaining);
          }
        });
    }
  };
  return (
    <div>
      <div>
        <div className="container mt-4">
          <h1 className="text-center">All Added Item</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                {/* <th>#</th> */}
                <th>Item name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {getCar.map((car) => (
                <tr key={car._id} className="table">
                  <td>#</td>
                  <td>{car.name}</td>
                  {/* <td>{car.quantity === null ? 0 : car.quantity}</td> */}
                  <td>{car.price}</td>
                  <td>
                    <div className="table-img">
                      <img src={car.img} alt="" />
                    </div>
                  </td>
                  <td className="delete">
                    {" "}
                    <button onClick={() => handleDeleteOne(car._id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
  // useEffect(() => {
  //   const getItem = async () => {
  //     const url = "https://car-valley1.herokuapp.com/addcar";
  //     console.log();
  //     const { data } = await axios.get(url, {
  //       headers: {
  //         authorization: `${user?.email} ${localStorage.getItem(
  //           "accessToken"
  //         )}`,
  //       },
  //     });
  //     setGetcar(data);

  //     // .then((res) => res.json())
  //     // .then((data) => setGetcar(data));
  //   };
  //   getItem();
  // }, [user?.email]);
  // const handleDelete = (id) => {
  //   const confirmDelete = window.confirm("Are you want to delete?");
  //   if (confirmDelete) {
  //     const url = `https://car-valley1.herokuapp.com/Cars/${id}`;
  //     fetch(url, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.deletedCount > 0) {
  //           const remaining = getCar.filter((car) => car._id !== id);
  //           setGetcar(remaining);
  //         }
  //       });
  //   }
};

export default MyItems;
