import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  // render() {
  //   return (
  //     <div>
  //       {this.state.counters.map(counter => (
  //         <Counter
  //           key={counter.id}
  //           onDelete={this.handleDelete}
  //           value={counter.value}
  //           id={counter.id}
  //         />
  //       ))}
  //       {/* Here ID and Key are two different things, they might have same value but key is internally used by React*/}
  //     </div>
  //   );
  // }

  render() {
    //Object Destructuring
    console.log("Counters Rendered");
    const { onReset, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
        {/* Here ID and Key are two different things, they might have same value but key is internally used by React*/}
      </div>
    );
  }
}

export default Counters;
