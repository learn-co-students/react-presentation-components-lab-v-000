// Code SimplerComponentHere Here
import React from 'react'

const mood = 'happy'

const SimplerComponent = props =>
  <div onClick={props.handleClick} mood={props.mood || mood}>
    I am just {mood}
  </div>


export default SimplerComponent
