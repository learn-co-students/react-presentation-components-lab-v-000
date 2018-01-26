import SimpleComponent from "./SimpleComponent";
import React from 'react';

// Code SimplerComponentHere Here
// handleClick = () =>{
//   console.log(this)
// }

// handleClick = () =>{
// }

const SimplerComponent = (props) => 
  <div onClick={props.handleClick} ><p>I am just happy.</p></div>
  
export default SimplerComponent