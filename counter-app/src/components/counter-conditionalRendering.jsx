import React, { Component } from "react";

class Counter2 extends Component {
  state = {
    count: 0,
    tags: []
  };

  style = {
    fontSize: 50,
    fontweight: "bold"
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please Create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter2;
