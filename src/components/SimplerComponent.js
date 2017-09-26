import React from 'react';

const originalContent = "I am just happy";

const SimplerComponent = (props) =>
  <div onClick={props.handleClick}>
    {originalContent}
  </div>;

export default SimplerComponent;
