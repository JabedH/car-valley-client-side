import React from "react";
import { Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SoccialLogina";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const Handlelogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <div>
        <Form onSubmit={Handlelogin} className="w-25 mx-auto text-start">
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
          <div className="login-btn">
            <button className="w-100 btn-color mt-3" type="submit">
              Login
            </button>
          </div>
          <div className="mt-3 text-center">
            <Link to="/Singup" className="text-decoration-none  ">
              Already you have an account?
            </Link>
          </div>
        </Form>
        <div className="social-login ">
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
