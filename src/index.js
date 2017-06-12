import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={beenClicked} />
  </div>,
  document.getElementById('root')
);

function beenClicked() {
  alert("I've been clicked!")
}
