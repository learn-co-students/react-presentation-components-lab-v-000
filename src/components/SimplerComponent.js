import React, { Component } from 'react';
// Code SimplerComponentHere Here

const SimplerComponent = prop => {
  return (
    <div className='simpler-component' onClick={prop.handleClick}>
      I am just happy
    </div>
  );
}

SimplerComponent.defaultProps = {
  handleClick() {
    if (document.querySelector('.simpler-component').innerHTML ===
      'I am just happy') {
      document.querySelector('.simpler-component').innerHTML = 'Now, I am sad';
    } else {
      document.querySelector('.simpler-component').innerHTML =
        'I am just happy';
    }
  },
};

export default SimplerComponent;
