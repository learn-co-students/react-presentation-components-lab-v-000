import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function changeRed(event) {
	event.target.style.color = "red"
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={changeRed} />
  </div>,
  document.getElementById('root')
);