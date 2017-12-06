import "../weather/index";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import WeatherApp from "../weather";

ReactDOM.render(<WeatherApp />, document.querySelector("#weather"));
