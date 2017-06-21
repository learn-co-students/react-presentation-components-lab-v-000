// Code SimplerComponentHere Here
/*
Although our SimpleComponent fits the pattern of a presentation component, the fact that it has state makes it unstable. To practice building a more stable type of presentational component, let's build a SimplerComponent to meet the following specifications:
In the components/SimplerComponent.js file, create a SimplerComponent component.
The component should be a "stateless functional" component.
It should render a <div> to the page that contains the text: "I am just happy".
It should receive one property called handleClick that performs some sort of action in response to a click — your choice!

*/
import React from 'react';

const SimplerComponent = ({handleClick}) => {
  return (
    <div onClick={handleClick}>
      <p>I am just happy</p>
    </div>
  );
};

export default SimplerComponent;
