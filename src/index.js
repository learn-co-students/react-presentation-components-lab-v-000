import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const alertMe = () => alert("Ouch!")

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={alertMe} />
  </div>,
  document.getElementById('root')
);
