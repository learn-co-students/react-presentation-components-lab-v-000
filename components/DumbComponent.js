const React = require('react');

class DumbComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      mood: 'happy'
    }

    this.handleClick = this.handleClick.bind(this);
  }

    handleClick() {
      this.setState({
        mood: this.state.mood === 'happy' ? 'sad' : 'happy'
      });
    }

render() {
  return (
      <div className="dumb-component" onClick={this.handleClick}>
        <h2>{this.state.mood}</h2>
      </div> 
    )
  }
}

module.exports = DumbComponent;