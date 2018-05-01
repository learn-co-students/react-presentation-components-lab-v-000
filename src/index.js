import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';
// handleClick = () => {
//   alert("No but really.")
// }
ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={() => alert("No but really.")} />
  </div>,
  document.getElementById('root')
);
