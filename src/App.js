import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState(current => ({count : current.count + 1}));
  }
  minus = () => {
    this.setState(current => ({count : current.count - 1}));
  }

  componentDidMount() {
    console.log("It's renedered")
  }

  componentDidUpdate() {
    console.log("It's updated!")
  }

  componentWillUnmount() {
    console.log("good bye, world!")
  }

  render() {
    console.log("rendering")
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
