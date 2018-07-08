import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const whenClicked = (e) => {
  e.persist()
  if(!!e.target.innerText.search("happy")){
    e.target.innerText = 'I am just sad.'
  } else if(!e.target.innerText.search("happy")) {
    e.target.innerText = 'I am just happy.'
  }
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={whenClicked} />
  </div>,
  document.getElementById('root')
);
