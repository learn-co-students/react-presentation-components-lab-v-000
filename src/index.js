import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';
const beExtraHappy = () => {
   alert('I have no state! I am just happy!');
 }
ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={beExtraHappy} />
  </div>,
  document.getElementById('root')
);
