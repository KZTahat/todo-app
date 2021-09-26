import React from "react";
import '../src/App.css'
import NavBar from "./Components/NavBar";
import ToDo from "./Components/ToDo";

export default class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <div style={{width:'75%', marginTop:'30px', marginLeft:'150px'}}>
          <ToDo />
        </div>
      </>
    );
  }
}
