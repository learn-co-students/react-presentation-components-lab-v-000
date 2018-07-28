import React, { Component } from 'react';


//handleClick = () => {
  //alert("I am ALWAYS happy!!!")
//}

const SimplerComponent = (props) => {
  return(
    <div onClick={props.handleClick}>
    <p>I am just happy</p></div>
  )
}

export default SimplerComponent;
