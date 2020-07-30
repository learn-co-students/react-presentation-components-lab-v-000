import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent 
      handleClick={event => { // I had a little fun here...
        event.target.style.backgroundColor = "blue";
        event.target.style.color = "white";
    }} />
  </div>,
  document.getElementById('root')
);