// Code SimplerComponent Here
import React from 'react'


// Create a component that is "stateless functional."
const SimplerComponent = props => (
// it should render a div to the page that contains the text:
// "I am happy." It should receive one property called handleClick
// that performs some sort of action in response to a click—your choice!
  <div id="simpler-component-div" onClick={props.handleClick}>I am just happy</div>
)
export default SimplerComponent
