import React from 'react'

const SimplerComponent = props => {
  console.log(props.handleClick)
  return(
    <div onClick={props.handleClick}>I am just happy</div>
  )
}
export default SimplerComponent