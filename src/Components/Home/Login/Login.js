import { async } from "@firebase/util";
import axios from "axios";
import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import SocialLogin from "../SocialLogin/SoccialLogin";
import "./Login.css";

const Login = () => {
  const emailRef = useRef("");
  const [logError, setLogError] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);

  const location = useLocation();
  const navigate = useNavigate();

  const Handlelogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://car-valley1.herokuapp.com/login",
      { email }
    );
    localStorage.setItem("accessToken", data.token);
    navigate(from, { replace: true });
  };
  if (loading) {
    return <Loading />;
  }
  let from = location.state?.from?.pathname || "/";
  console.log(user?.user?.email);
  console.log(user?.email);

  let ErrorHandle;

  if (error) {
    ErrorHandle = (
      <div>
        <p>your information didn't match</p>
      </div>
    );
  }

  const handleReset = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("sent reset email");
    }
    if (!email) {
      setLogError("please put your correct email");
    }
  };
  return (
    <div className="login">
      <div className="mt-5 all-login mx-auto">
        <Form onSubmit={Handlelogin} className="mx-auto text-start">
          <input
            ref={emailRef}
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
          <div className="login-btn">
            <button className="w-100 btn-color mt-3" type="submit">
              Login
            </button>
          </div>
          <div className="text-center mt-2" style={{ color: "red" }}>
            {logError}
            {ErrorHandle}
          </div>
          <div className="text-center  mt-3">
            <Link
              className="text-decoration-none"
              to="/login"
              onClick={handleReset}
            >
              Forget Password
            </Link>
          </div>
          <div className="mt-2 mb-2 text-center">
            <Link to="/Singup" className="text-decoration-none  ">
              Don't have any account?
            </Link>
          </div>
          <div className="social-lin ">
            <dir className="or-line"></dir>
            <p>or</p>
            <dir className="or-line"></dir>
          </div>
        </Form>

        <div className="social-login ">
          <SocialLogin />
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
