import React, { Component } from "react";

class Counter3 extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
    // imgUrl: "https://picsum.photos/200"
  };

  style = {
    fontSize: 50,
    fontweight: "bold"
  };

  handleIncrement = () => {
    console.log("Increment clicked!", this);
    this.setState({ count: this.state.count + 1 });
    // obj.metho();
    //functions();
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  //Cmd+Shift+R  to refactor into a method
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    //prettier-ignore
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    const x = <h1>Zero</h1>;
    //return count === 0 ? <h1>Zero</h1> : this.state.count;
    //return count === 0 ? x : count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter3;
