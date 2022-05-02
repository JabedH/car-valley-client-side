import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [sendEmailVerification, sending1, error1] =
    useSendEmailVerification(auth);
  const [newError, setNewError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPass = event.target.confirmpass.value;
    createUserWithEmailAndPassword(email, password);
    await sendEmailVerification(email);
    if (password !== confirmPass) {
      setNewError("You password did not match");
    }
    if (password.length < 6) {
      setNewError("password must be 6 characters or longer");
    } else {
      toast("Email verification has been sent");
    }
  };
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
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
        <input
          name="confirmpass"
          className="w-100 mt-3"
          type="password"
          placeholder="confirm Password"
          required
        />
        {newError}
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
      <ToastContainer />
    </div>
  );
};

export default Signup;
