import React from 'react';
// Code SimplerComponent Here
const SimplerComponent = (props) => {
  const handleChange = event => console.log('hello');

  return (
    <div onClick={props.handleClick}>I am just happy</div>
  )
}

export default SimplerComponent;