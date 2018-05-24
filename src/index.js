import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function printToConsole() {
  console.log("I've been clicked!")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={printToConsole} />
  </div>,
  document.getElementById('root')
);