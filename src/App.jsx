import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}
