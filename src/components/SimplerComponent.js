// Code SimplerComponent Here
import React from 'react';

const SimplerComponent = () => {
  const handleClick = () => {
    alert("Yay!")
  }

  return <div onClick={handleClick}>I am just happy</div>
}
 
export default SimplerComponent