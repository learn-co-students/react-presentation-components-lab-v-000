// Code SimplerComponentHere Here
import React, { Component } from 'react';


const handleClick = () => {
  debugger;
  console.log('hi');
}

const SimplerComponent = (props) => 
  <div onClick={props.handleClick}>I am just happy
  </div>;

export default SimplerComponent;