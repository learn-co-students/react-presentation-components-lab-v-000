// Code SimplerComponentHere Here
import React from 'react'



const SimplerComponent = ({handleClick}) =>

<div onClick={handleClick}>I am just happy</div>

SimplerComponent.defaultProps = {
  handleClick: () =>
  console.log("yo")
}

export default SimplerComponent
