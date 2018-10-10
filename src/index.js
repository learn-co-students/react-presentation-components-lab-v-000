import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function claimToBeHappy() {
  alert("Thanks for clicking me. Oh boy, I am so happy! Always happy!")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={claimToBeHappy} />
  </div>,
  document.getElementById('root')
);