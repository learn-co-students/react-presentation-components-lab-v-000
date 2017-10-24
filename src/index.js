import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={(mood) => mood === "happy" ? mood = "sad" : mood = "happy"} />
  </div>,
  document.getElementById('root')
);
