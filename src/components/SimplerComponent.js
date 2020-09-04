// Code SimplerComponent Here
import React from "react";

const SimplerComponent = (props) => (
  <div className="mood" onClick={props.handleClick}>
    <p>"I am just happy"</p>
  </div>
);

export default SimplerComponent;
