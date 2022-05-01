import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const handleSignup = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const confirmPass = event.target.confirmPass.value;
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <Form onSubmit={handleSignup} className="w-25 mx-auto text-start">
        <input
          name="name"
          className="w-100 mt-3"
          type="text"
          placeholder="Name"
          required
        />
        <input
          name="email"
          className="w-100 mt-3"
          type="email"
          placeholder="Enter email"
          required
        />
        <input
          name="password"
          className="w-100 mt-3"
          type="password"
          placeholder="Password"
          required
        />
        {/* <input
          name="password"
          className="w-100 mt-3"
          type="password"
          placeholder="confirm Password"
          required
        /> */}
        <div className="login-btn">
          <button className="w-100 btn-color mt-3" type="submit">
            Sing Up
          </button>
        </div>
        <div className="mt-3 text-center">
          <Link to="/login" className="text-decoration-none  ">
            Already you have an account?
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
