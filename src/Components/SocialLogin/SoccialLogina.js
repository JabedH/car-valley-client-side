import React from "react";
import google from "../../img/icon/google.svg";
import fb from "../../img/icon/fb.svg";
import github from "../../img/icon/githiub.svg";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div onClick={() => signInWithGoogle()} className="social-icon">
      <button>
        <img src={google} alt="" />
      </button>
      <button>
        <img src={fb} alt="" />
      </button>
      <button>
        <img src={github} alt="" />
      </button>
    </div>
  );
};

export default SocialLogin;
