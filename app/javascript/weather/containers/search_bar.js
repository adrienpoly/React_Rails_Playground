import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: 'Paris' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.FetchWeather(this.state.term);
    this.setState({term: ""})
  }

  render() {
    return (
      <div className="search-bar">
        <form className="input-group" onSubmit={this.onFormSubmit}>
            <input
            placeholder="Get a 5 day forcast in your favorite cities"
            className = "form-control input-lg"
            value     = {this.state.term}
            onChange  = {this.onInputChange}/>

            <span className="input-group-btn">
              <button type="submit" className="btn btn-primary btn-lg">Search</button>
            </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({FetchWeather}, dispatch)
}


export default connect (null, mapDispatchToProps)(SearchBar);
