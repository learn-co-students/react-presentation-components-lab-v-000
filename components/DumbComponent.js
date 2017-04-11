const React = require('react');

class DumbComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      mood: "happy"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    const currentMood = this.state.mood
    const setMood = (mood) => {
      this.setState({
        mood: mood
      });
    };

    currentMood === "happy" ? setMood("sad") : setMood("happy");
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <h1>{this.state.mood}</h1>
      </div>
    )
  }
}

module.exports = DumbComponent;
