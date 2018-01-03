import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';


const yellowOnClick = (e) => {
  e.target.style.backgroundColor = "yellow"
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={yellowOnClick} />
  </div>,
  document.getElementById('root')
);
