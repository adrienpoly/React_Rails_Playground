import React,{Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

    render() {
      return (
        <div className="search-bar">
          <input
            value = {this.state.term}
            placeholder="Search videos on Youtube"
            onChange={event => this.onInputChange(event.target.value)}
            className="form-control input-lg"/>
        </div>
      )
    }

    onInputChange(term) {
      this.setState({term});
      this.props.onSearch(term);
    }
}
