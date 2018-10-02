// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
  state = {
    mood:"happy"
  }

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>
  }

  handleClick = () => {
    const newMood = this.state.mood === "happy" ? "sad" : "happy"
    this.setState({ mood: newMood })
  }

}

export default SimpleComponent
// In this lab, we'll illustrate this principle by building two components: a SimpleComponent and a
// SimplerComponent. Our SimpleComponent will be presentational, but it will have a tiny bit of state
// and therefore be less stable than our SimplerComponent. Specifically, our SimpleComponent will
// experience wild mood fluctuations. Our SimplerComponent, meanwhile, will be written as a
// "stateless functional" component and therefore be steadfastly happy.

// The specs for our SimpleComponent are as follows:
// In the components/SimpleComponent.js file, create a SimpleComponent component.
// The component should be declared as a class (instance of Component) so that it can carry state.
// The component should have a state property called mood that has a default value of happy.
// The component should simply render its current mood state to the page in a div.
// The component should implement a handleClick function that can serve as a callback to the <div>'s
// click event. When clicked, the component's mood should toggle between happy and sad states.
// While part of our design, the fact that this component's mood fluctuates when clicked makes it a
// less predictable part of our UI. As our program runs and users interact with it, we won't be able
// to predict what state our component is in. Obviously, many components need state in order to create
// interactive UIs. However, as we will see in the second component in this lab, it's good to avoid
// state entirely where possible.
