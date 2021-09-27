import React from "react";
import "../src/App.css";
import NavBar from "./Components/NavBar";
import ToDo from "./Components/ToDo";
import Footer from "./Components/Footer";
import SettingsProvider from "./Context/settings";

export default function App() {
  return (
    <SettingsProvider>
      <NavBar />      
      <div style={{ width: "75%", marginTop: "30px", marginLeft: "150px" }}>
        <ToDo />
      </div>
      <Footer />
    </SettingsProvider>
  );
}
