import React from 'react';

// const chubchub = (event) => {
//   console.log('Whee!');
// };

const SimplerComponent = (props) =>
  <div onClick={props.chubchub}>
    I am just happy
  </div>;

export default SimplerComponent;

// NOT a functional component:
//
// export default class SimpleComponent extends Component {
//   this.state crap
//   render()
// }
//
// This IS a functional component:
//
// export default class SimpleComponent extends Component {
//
//   render() {
//     return JSX
//   }
// }
//
// The above component refactored -- This is ALSO a functional component:
//
// const SimpleComponent = () =>
//   <div>JSX</div>;
//
// Functional Component = component that has no state and only specifies a render() function
//
// functions have no children in plain vanilla JS
//
// component is a PARENT. whatever the component renders is its CHILDREN
//
// Functional component IS a function
//
// component it is more than a function
//
// component = (function || class) + other stuff (i.e. context, which in the case of a functional component, is rendering)
//
// function != (function + other stuff)
//
// Parameters ("params"), or arguments ("args"), passed into a component ARE properties ("props") of that component
//
// 0 or 1, to be or not be, IS or IS NOT
//
// Non-functional component, or classical component - iS NOT a function
// Non-functional component is a set of functions + state
//
// The concept of "component" (whether it's implemented as a functional or non-functional component) is NOT a function
//
