import React, { Component } from "react";
class Counter extends Component {
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
  // handleIncrement = () => {
  //   console.log("Increment clicked");
  //   this.setState({ value: this.state.value + 1 });
  // };

  // The component that owns a piece of the state, should be the one
  // modifying it.

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Single counter rendered");
    return (
      <div className="row">
        {/*this.props.children*/}
        <div className="col-1">
          <span style={this.style} className={this.getClassType()}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            x
          </button>
        </div>

        {/* this is one way to handle click events */}
        {/* <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        > */}
        {/* In here we can also pass in the parameters to method unlike in the above approach  */}
      </div>
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
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
