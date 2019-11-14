import React, { Component } from "react";

class SimpleComponent extends Component {
  constructor(props) {
    super(props);

    // Initial State here..
    this.state = { mood: "I am just happy" };
  }

  render() {
    return (
      <div>
        <h3>{this.state.mood}</h3>
      </div>
    );
  }
}

export default SimpleComponent;
