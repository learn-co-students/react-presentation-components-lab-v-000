import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const alertParty = () => {
  alert("!!!!!!")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={alertParty} />
  </div>,
  document.getElementById('root')
);
