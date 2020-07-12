import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const realFeelings = event => {
  console.log("or am I?")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={realFeelings} />
  </div>,
  document.getElementById('root')
);