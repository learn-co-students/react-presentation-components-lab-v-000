import React from 'react'

const SimplerComponent = (props) => {
  let message = "I am just happy.";

  return(
    <div onClick={props.handleClick}>{message}</div>
  )
}

export default SimplerComponent
