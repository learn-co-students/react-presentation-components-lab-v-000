import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const turnRed = (event) => {
  event.target.innerHTML = "I am always happy"
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={turnRed} />
  </div>,
  document.getElementById('root')
);
