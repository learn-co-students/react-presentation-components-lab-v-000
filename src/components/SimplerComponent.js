// Code SimplerComponentHere Here
import React from 'react';

var handleClick = () => {
  console.log("Are you really happy?")
}

const SimplerComponent = (props) => {
  return <div onClick={props.handleClick}>I am just happy!</div>
}

export default SimplerComponent
