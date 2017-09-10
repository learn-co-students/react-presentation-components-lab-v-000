import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const theClick = (event) => {console.log(event.target)}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={theClick} />
  </div>,
  document.getElementById('root')
);