import React from 'react'

// 1. The component should be a "stateless functional" component.
// 2. It should render a <div> to the page that contains the text: "I am just happy".
// 3. It should receive one property called handleClick that performs some sort of action 
//    in response to a click!

const SimplerComponent = (props) => {
	return <div onClick={props.handleClick}>I am just happy.</div>	
}

export default SimplerComponent

// ALTERNATIVE:
// const SimplerComponent = props => <div onClick={props.handleClick}>I am just happy.</div>