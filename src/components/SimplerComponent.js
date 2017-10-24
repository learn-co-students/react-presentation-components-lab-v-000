import React from 'react'

const defaultMood = "happy"

const SimplerComponent = (props) =>
  <div
    onClick={props.handleClick}
  >
    I am just { props.mood || defaultMood }
  </div>

export default SimplerComponent;
