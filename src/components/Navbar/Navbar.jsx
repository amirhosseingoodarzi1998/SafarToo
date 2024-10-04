import React from "react";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.props.src} alt="" />
        </div>
      </div>
    );
  }
}
