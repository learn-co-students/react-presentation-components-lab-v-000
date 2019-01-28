import React from 'react';

const SimplerComponent = props => {
  return <div onClick={props.handleClick}>I am just happy</div>;
}

export default SimplerComponent;

/*
// Specifications for Simpler Component:
// In src/components/SimplerComponent.js file, create a SimplerComponent component.
// SimplerComponent should be a stateless functional component.
// SimplerComponent stores an arrow function stateless functional component that accepts props as its argument
// SimplerComponent should render (really return) a <div> to the page that contains the text: "I am just happy".
// SimplerComponent should receive one property called handleClick that performs some sort of action in response to a click.
// props.handleClick = the handleClick callback function object passed down as prop (see index.js file)
// SimplerComponent is more stable, more predictable and easier to maintain:
// SimplerComponent has NO ability to change its output internally. 
// We can always know, based on the props that we provide, what type of component it will produce. 
// The component does NOT lack interactivity; we can still determine a wide variety of click behaviors on the component 
// just by providing a different callback. 
// It's just that the component itself cannot determine its behavior.
*/