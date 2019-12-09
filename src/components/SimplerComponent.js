// Code SimplerComponent Here
import React, { Component } from "react";

export default class SimplerComponent extends Component {

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
