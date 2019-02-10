import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  style = {
    fontSize: 10,
    fontWeight: "bold"
  };

  // one way to bind event handler
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // Or we can use arrow functions
  handleIncrement = () => {
    console.log("Increment clicked");
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.style} className={this.getClassType()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  // conditional rendering
  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  // render() {
  //   return (
  //     <div>
  //       {this.state.tags.length === 0 && "Please add some tags in list"}
  //       {this.renderTags()}
  //     </div>
  //   );
  // }

  getClassType() {
    var classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
