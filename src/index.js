import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const consoleHappy = () => {
  console.log("Yes I'm happy!")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={consoleHappy} />
  </div>,
  document.getElementById('root')
);
