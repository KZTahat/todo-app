import { useContext, useState } from "react";
import { loginContext } from "../Context/logIn";

export default function LoginForm() {
  const loginState = useContext(loginContext);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    loginState.login(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={(e) => setUserName(e.target.value)}
        className="formItems"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        className="formItems"
      />
      <button id="loginButton" className="formItems" type="submit">
        Log In
      </button>
    </form>
  );
}
