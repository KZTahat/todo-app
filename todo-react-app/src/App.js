import React from "react";
import "../src/App.css";
import NavBar from "./Components/NavBar";
import ToDo from "./Components/ToDo";
import Footer from "./Components/Footer";
import SettingsProvider from "./Context/settings";
import LoginProvider from "./Context/logIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Components/SignupForm";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginProvider>
              <NavBar />
              <SettingsProvider>
                <div
                  style={{
                    width: "75%",
                    marginTop: "30px",
                    marginLeft: "150px",
                  }}
                >
                  <ToDo />
                </div>
              </SettingsProvider>
            </LoginProvider>
            <Footer />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
