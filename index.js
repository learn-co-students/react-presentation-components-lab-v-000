import React from 'react';
import ReactDOM from 'react-dom';

import DumbComponent from './components/DumbComponent';
import DumberComponent from './components/DumberComponent';

function handleClick (ev) {
  alert("I've been clicked!");
}

ReactDOM.render(
  <div>
    <DumbComponent />
    <DumberComponent handleClick={handleClick} />
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // leave this in!
