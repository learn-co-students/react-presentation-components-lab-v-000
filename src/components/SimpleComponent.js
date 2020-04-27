import React from 'react';

class SimpleComponent extends React.Component {
    state  = {
        mood: 'happy'
    }

    handleToggle = () => {
        const { mood } = this.state

        const newMood = mood === 'happy' ? 'sad' : 'happy'

        this.setState({ mood: newMood })
    }
    
    render() {
        return (
            <div onClick={this.handleToggle}>
                {this.state.mood}
            </div>
        )
    }
}

export default SimpleComponent;