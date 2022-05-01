import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SoccialLogina";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div>
        <Form className="w-25 mx-auto text-start">
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
              Submit
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
