
import React from 'react' //be sure to leave out component here!
//no render or return
//no this, has to be props!
//no brackets!
//handleclick needs to be a variable
const handleClick = console.log('boop');

const SimplerComponent = (props) =>

  <div onClick={props.handleClick}>
    I am just happy
  </div>;



export default SimplerComponent
