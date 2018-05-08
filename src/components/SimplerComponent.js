// Code SimplerComponentHere Here
import React from 'react';

const SimplerComponent = ({handleClick}) => {
  return (
    <div onClick={handleClick}>I am just happy</div>
  )
}

// const SimplerComponent = (props) => {<div onClick={props.handleClick}>I am just happy</div>}

export default SimplerComponent;