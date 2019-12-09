// Code SimpleComponent Here
import React, { Component } from "react";

export default class SimpleComponent extends Component {
  constructor() {
   super();

   this.state = {
     mood:'happy'
   };
 }
 handleClick = () => {
    // Probably do some work to update the state
  }
  render() {
    return (
      <div>
      {this.state}
      </div>
    );
  }
}
