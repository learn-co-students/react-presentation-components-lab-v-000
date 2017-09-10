import React from 'react'

const SimplerComponent = (props)=>{
  const handleClick = (event) => {props.handleClick(event)}
  return (<div onClick = {handleClick} >I am just happy.</div>)
}

export default SimplerComponent