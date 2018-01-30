import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const alertMessage = () => {
  alert("I'm seriously happy!")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={ alertMessage } />
  </div>,
  document.getElementById('root')
);