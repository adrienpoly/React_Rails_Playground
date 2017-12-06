import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  render() {
    return (
      <div className="search-bar">
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input
            placeholder="Search videos on Youtube"
            className="form-control input-lg"
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
          />

          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary btn-lg">
              Search
            </button>
          </span>
        </form>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearch(term);
  }
}
