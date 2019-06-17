import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

let count = 0
function whenClicked(event) {
  event.preventDefault()
  if (count === 0) {
    event.target.innerText += ' clicked'
    count++
  }
  else {
    event.target.innerText += ' unclicked'
    count--
  }
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={whenClicked} />
  </div>,
  document.getElementById('root')
);
