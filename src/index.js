
import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const changeColor = (event) => {
  if (event.target.style.color === "red") {
    event.target.style.color = "blue";
  } else {
    event.target.style.color = "red";
  }
}

ReactDOM.render(
  <div>
    <SimpleComponent /><br />
    <SimplerComponent handleClick={changeColor} />
  </div>,
  document.getElementById('root')
);
