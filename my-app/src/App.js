import React, { Component } from 'react';
import FilteredList from './FilteredList';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Sample produce list
const produce = [
  { name: "Apple", type: "Fruit" },
  { name: "Pineapple", type: "Fruit" },
  { name: "Banana", type: "Fruit" },
  { name: "Pear", type: "Fruit" },
  { name: "Strawberry", type: "Fruit" },
  { name: "Orange", type: "Fruit" },
  { name: "Lettuce", type: "Vegetable" },
  { name: "Cucumber", type: "Vegetable" },
  { name: "Eggplant", type: "Vegetable" },
  { name: "Squash", type: "Vegetable" },
  { name: "Bell pepper", type: "Vegetable" },
  { name: "Onion", type: "Vegetable" }
];

class App extends Component {
  render() {
    return (
      <div className="App container text-center p-4">
        <HelloWorld name="Steven" />
        <Counter />
        <FilteredList items={produce} />
      </div>
    );
  }
}

export default App;
