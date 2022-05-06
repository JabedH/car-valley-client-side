import React from "react";
import "./SocialLogin.css";
import google from "../../../img/icon/google.svg";
import fb from "../../../img/icon/fb.svg";
import github from "../../../img/icon/githiub.svg";

import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [signInWithFacebook, user2, loading2, error2] =
    useSignInWithFacebook(auth);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  console.log(user?.user?.email);
  if (user) {
    fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({
        email: user?.user?.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.token);
        navigate(from, { replace: true });
      });
  }
  return (
    <div onClick={() => signInWithGoogle()} className="login-social-icon">
      <button>
        <img className="login-icon" src={google} alt="" />
      </button>
      <button>
        <img onClick={() => signInWithFacebook()} src={fb} alt="" />
      </button>
      <button>
        <img onClick={() => signInWithGithub()} src={github} alt="" />
      </button>
    </div>
  );
};

export default SocialLogin;
