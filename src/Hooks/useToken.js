import axios from "axios";
import React, { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState(" ");
  useEffect(() => {
    const getToken = async () => {
      console.log(user);
      const email = user?.user?.email;
      if (email) {
        const { data } = await axios.post(
          "https://car-valley1.herokuapp.com/login",
          { email }
        );
        localStorage.setItem("accessToken", data.token);
      }
    };
    getToken();
  }, [user]);
  return [token];
};

export default useToken;
