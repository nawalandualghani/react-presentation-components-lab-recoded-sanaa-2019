// Code SimplerComponent Here
import React, { Component } from "react";

export default class SimpleComponent extends Component {
  constructor() {
   super();

   this.state = {
     mood:'happy'
   };
 }
 handleClick = () => {
   if(this.state.mood==happy)
   this.setState({
     this.mood:'sad'
   })
else {
  this.setState({
    this.mood:'happy'
  })
}
  }
  render() {
    return (
      <div >
      <button onClick={this.handleClick}>click</button>
      {this.state}
      </div>
    );
  }
}
