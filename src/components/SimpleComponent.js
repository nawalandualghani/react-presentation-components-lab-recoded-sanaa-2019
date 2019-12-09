// Code SimpleComponent Here
import React, { Component } from "react";

export default class SimpleComponent extends Component {
  render() {
    return (
      <div>
        {this.props.posts.map(post => (
          <div>{post.title}</div>
        ))}
      </div>
    );
  }
}
