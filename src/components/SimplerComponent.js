// In the components/SimplerComponent.js file, create a SimplerComponent component.
// The component should be a "stateless functional" component:
        // that renders a <div> to the page that contains the text: "I am just happy".
        // If you open the index.js file, you'll see that SimplerComponent receives one prop 
            // called handleClick that is currently undefined. Rewrite this prop to perform any action 
            // of your choice! Then, make sure SimplerComponent can trigger 
              // this action when it's clicked on.

            //   <SimplerComponent />
            //   ✓ should be a stateless functional component
            //   ✓ should render a div with text "I am just happy"
            //   ✓ should be capable of handling onClick

// Code SimplerComponent Here


import React from 'react';

const SimplerComponent = props => <div onClick={props.handleClick}>I am just happy.</div>

export default SimplerComponent;
