// Code SimpleComponentHere Here
import React from 'react';
 
 class SimpleComponent extends React.Component {
   constructor() {
     super();

     this.state = {
       mood: "happy"
     }
   }

   handleMoodChange = () => {
     if (this.state.mood === "happy") {
       this.setState({
         mood: "sad"
       })
     } else {
       this.setState({
         mood: "happy"
       })
     }
   }

   render() {
     return (
       <div onClick={this.handleMoodChange}>
         {this.state.mood}
       </div>
     )
   }
 }

 export default SimpleComponent;
