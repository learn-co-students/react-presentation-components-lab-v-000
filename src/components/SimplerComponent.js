// Code SimplerComponent Here
import React from 'react'

const SimplerComponent = (props) => <div onClick={props.handleClick}>I am just happy</div>

export default SimplerComponent

// SimplerComponent
// Although our SimpleComponent fits the pattern of a presentational component, the fact that it has
// state makes it unstable. To practice building a more stable type of presentational component, let's
// build a SimplerComponent to meet the following specifications:
// In the components/SimplerComponent.js file, create a SimplerComponent component.
// The component should be a "stateless functional" component.
// It should render a <div> to the page that contains the text: "I am just happy".
// It should receive one property called handleClick that performs some sort of action in response to a
// click — your choice!
// When you've finished this component, take a moment to compare it to the previous presentational component
// we wrote. See how much more stable it is? It has no ability to change its output internally. We can
// always know, based on the props that we provide, what type of component it will produce. Note, as well,
// that this doesn't mean that the component lacks interactivity. We can actually determine a wide variety
// of click behaviors on the component just by providing a different callback. It's just that the component
// itself cannot determine its behavior. This kind of "simpleness" is actually a good thing because it makes
// our component more predictable and easier to maintain.
