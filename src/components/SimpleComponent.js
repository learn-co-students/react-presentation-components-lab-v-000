// Code SimpleComponent Here

class SimpleComponent extends Component {
    state = {
        mood: " happy"
    }

    handleClick(){
        this.setState(state=> ({happy}
            )
          )
        }

    render() {
         return (
        <div onClick={this.handleClick}>
          {this.state.mood? 'happy' : 'sad'}
         </div>
         )
    }
}

export default SimpleComponents

