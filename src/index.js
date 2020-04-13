import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

// handleClick 

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={() => {console.log('You Clicked Me!')}} />
  </div>,
  document.getElementById('root')
);