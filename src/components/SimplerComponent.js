import React from 'react'

const defaultMood = 'happy'

const SimplerComponent = ({ handleClick, mood }) => (
  <div onClick={handleClick}>I am just {defaultMood || mood}</div>
)

export default SimplerComponent
