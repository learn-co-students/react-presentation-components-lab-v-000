import React, { Component } from 'react';

const SimplerComponent = (props) => {
  return (
    <div onClick={props.handleClick}>I am just happy</div>
  )
};

// or:
// const SimplerComponent = props => <div onClick={props.handleClick}>I am just happy</div>;

export default SimplerComponent;
