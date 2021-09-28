import React, { useEffect, useState } from "react";
import base64 from "base-64";
import superagent from "superagent";
import jwt from "jsonwebtoken";
import cookie from "react-cookies";

export const loginContext = React.createContext();
const API = "https://mid-project-01.herokuapp.com";

export default function LoginProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const tokenFromCookie = cookie.load("token");
    setUserData(tokenFromCookie);
  }, []);

  async function login(username, password) {
    let encodedData = base64.encode(`${username}:${password}`);
    let response = await superagent
      .post(`${API}/signin`)
      .set("authorization", `Basic ${encodedData}`);

    setUserData(response.body.token);
  }

  function setUserData(token) {
    if (token) {
      const user = jwt.decode(token);
      setLoginState(true, user);
      cookie.save("token", token);
    } else {
      setLoggedIn(false);
    }
  }

  const setLoginState = (loggedIn, user) => {
    setLoggedIn(loggedIn);
    setUser(user);
  };

  const logout = () => {
    setLoginState(false, {});
    cookie.remove("token");
  };

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  };

  const state = {
    loggedIn,
    user,
    login,
    logout,
    can,
  };
  return (
    <loginContext.Provider value={state}>
      {props.children}
    </loginContext.Provider>
  );
}
