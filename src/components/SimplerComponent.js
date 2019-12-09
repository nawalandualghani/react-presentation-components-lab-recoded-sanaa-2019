// Code SimplerComponent Here
import React, { Component } from "react";

export default class SimpleComponent extends Component {

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
