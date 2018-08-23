import React from 'react';

// Code SimplerComponent Here

// const TextField = (props) =>
//   <input
//     className="field field-light"
//     onChange={props.onChange}
//     limit={props.limit || defaultLimit}
//   />;

const SimplerComponent = (props) =>
  <div onClick={props.handleClick}>
    I am just happy
  </div>

export default SimplerComponent
