import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </div>

      /*
      <React.Fragment>
        <h1>Hello world!</h1>
        <button>Increment</button>
      </React.Fragment>
      */
    );
  }

  formatCount() {
    const { count } = this.state;
    const x = <h1>Zero</h1>;
    //return count === 0 ? <h1>Zero</h1> : this.state.count;
    //return count === 0 ? x : count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
