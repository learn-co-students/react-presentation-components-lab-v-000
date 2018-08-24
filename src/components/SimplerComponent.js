import React from "react";

const SimplerComponent = ({ handleClick }) => (
  <div onClick={handleClick}>I am just happy</div>
);

const handleClick = () => console.log("Clicked!");

export default SimplerComponent;
