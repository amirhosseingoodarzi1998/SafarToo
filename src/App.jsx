import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [{ id: 1, src: "/src/assets/images/Logo.png" }],
    };
  }

  render() {
    return (
      <div>
        <Navbar {...this.state.data[0]} />
      </div>
    );
  }
}
