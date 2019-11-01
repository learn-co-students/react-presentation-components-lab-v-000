import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function greeting() {
	console.log("hello");
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={() => {greeting()}}/>
  </div>,
  document.getElementById('root')
);