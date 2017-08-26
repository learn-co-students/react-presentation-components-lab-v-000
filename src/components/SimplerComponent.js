import React from 'react';

const handleClick = (event) => {
  console.log('Whee!');
};

const SimplerComponent = ({handleClick}) =>
  <div onClick={handleClick}>
    I am just happy
  </div>;

export default SimplerComponent;
