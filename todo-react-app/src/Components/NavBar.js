import { useContext } from "react";
import { loginContext } from "../Context/logIn";
import "./components.css";
import LoginForm from "./LoginForm";
import { When } from "react-if";
import { Link } from "react-router-dom";

export default function NavBar() {
  const loginState = useContext(loginContext);
  return (
    <nav class="bp3-navbar bp3-dark">
      <div class="margin: 0 auto; width: 480px;">
        <div class="bp3-navbar-group bp3-align-left">
          <div class="bp3-navbar-heading">ToDo-App</div>
        </div>
        <div class="bp3-navbar-group bp3-align-right">
        <Link to='/'>Home</Link>
          <When condition={!loginState.loggedIn}>
            <LoginForm />
            <button><Link to='/signup'>Sign Up</Link></button>
          </When>
          <When condition={loginState.loggedIn}>
            <button
              id="logoutButton"
              className="formItems"
              onClick={loginState.logout}
            >
              Log Out
            </button>
          </When>
          <span class="bp3-navbar-divider"></span>
          <button class="bp3-button bp3-minimal bp3-icon-user"></button>
          <button class="bp3-button bp3-minimal bp3-icon-notifications"></button>
          <button class="bp3-button bp3-minimal bp3-icon-cog"></button>
        </div>
      </div>
    </nav>
  );
}
