import React from "react";
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function clicked(event) {
  event.target.innerText = "I was clicked!";
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={clicked} />
  </div>,
  document.getElementById('root')
);