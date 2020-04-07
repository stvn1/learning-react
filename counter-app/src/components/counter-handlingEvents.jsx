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
  // constructor() {
  //   // Must call super constructor in derived class
  //   // before accessing 'this' or returning from derived
  //   // constructor
  //   // The super keyword is used to access and call
  //   // functions on an object's parent.
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   console.log("Constructor", this);
  // }

  // handleIncrement() {
  //   console.log("Increment clicked!", this);
  //   // obj.metho();
  //   //functions();
  // }
  // Or we can use an arrow function
  handleIncrement = () => {
    console.log("Increment clicked!", this);
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
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

      /*
      <React.Fragment>
        <h1>Hello world!</h1>
        <button>Increment</button>
      </React.Fragment>
      */
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
