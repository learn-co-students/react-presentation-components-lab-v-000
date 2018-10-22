// Code SimplerComponent Here
import React from 'react';

const handleClick = () => {
  return "Hi!"
}

const SimplerComponent = (props) =>
  <div onClick={props.handleClick}>
    I am just happy.
  </div>

export default SimplerComponent;
