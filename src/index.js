import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const shoutHappy = () => {
  alert("Happyy happyy happyy happyy!")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={shoutHappy} />
  </div>,
  document.getElementById('root')
);
