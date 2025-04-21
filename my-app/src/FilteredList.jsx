import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "all"
    };
  }

  // Handle search input
  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  // Handle dropdown selection
  onSelectType = (eventKey) => {
    this.setState({ type: eventKey.toLowerCase() }); // Convert to lowercase to match the data
  };

  // Filter by both name and type
  filterItem = (item) => {
    const nameMatch = item.name.toLowerCase().includes(this.state.search);
    const typeMatch =
      this.state.type === "all" ||
      item.type.toLowerCase() === this.state.type;
    return nameMatch && typeMatch;
  };

  render() {
    return (
      <div>
        <h2>Produce Search</h2>

        <DropdownButton
          id="typeDropdown"
          title="Filter"
          variant="primary"
          size="lg"
          className="mb-3"
          onSelect={this.onSelectType}
        >
          <Dropdown.Item eventKey="All" className="big-text">All</Dropdown.Item>
          <Dropdown.Item eventKey="Fruit" className="big-text">Fruit</Dropdown.Item>
          <Dropdown.Item eventKey="Vegetable" className="big-text">Vegetable</Dropdown.Item>
        </DropdownButton>

        <input
          type="text"
          placeholder="Search"
          onChange={this.onSearch}
          className="form-control mb-3"
        />

        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
