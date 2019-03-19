import React from 'react'
import ReactDOM from 'react-dom'

import SimpleComponent from './components/SimpleComponent'
import SimplerComponent from './components/SimplerComponent'

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={
        (event) => {
          const newText = event.target.innerText === "I am just happy" ?
          "I'm really sad" : "I am just happy"

          event.target.innerText = newText
        }
      }/>
  </div>,
  document.getElementById('root')
)
