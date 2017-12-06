import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { createStore, applyMiddleware } from "redux";
import SearchBar from "./containers/search_bar";
import WeatherList from "./containers/weather_list";
import ReduxPromise from "redux-promise";
import "./assets/stylesheets/style.scss";

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const WeatherApp = (_props, _railsContext) => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
);

export default WeatherApp;
