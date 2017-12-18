// Code SimpleComponentHere Here
import React from 'react';

export default class SimpleComponent extends React.Component {
      constructor(){
        super();
        this.state = {
          state: 'happy'
        }
      }

      handleClick = () => {
        this.setState({
          mood: 'sad'
        })
      }

        render(
          <div>
            <p onClick={this.handleClick}>{this.state.mood} </p>
          </div>
        )
}
