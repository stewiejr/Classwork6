import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <Button variant="primary" size= "lg" onClick={this.incrementCount}>Increase</Button>
      </div>
    );
  }
}

export default Counter;
