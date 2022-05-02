import React from "react";
import google from "../../img/icon/google.svg";
import fb from "../../img/icon/fb.svg";
import github from "../../img/icon/githiub.svg";
import auth from "../../firebase.init";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [signInWithFacebook, user2, loading2, error2] =
    useSignInWithFacebook(auth);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    console.log(user);
    navigate(from, { replace: true });
  }
  return (
    <div onClick={() => signInWithGoogle()} className="social-icon">
      <button>
        <img src={google} alt="" />
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
