import React from 'react'
function handleClick() {alert('clicked')}


function SimplerComponent({handleClick}) {
  return <div onClick={handleClick}  >I am just happy</div>
}// Code SimplerComponentHere Here

export default SimplerComponent
