import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function stillHappy() {
  alert("still happy")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={stillHappy}/>
  </div>,
  document.getElementById('root')
);