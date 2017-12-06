import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Chart from "../components/chart";
import ReChart from "../components/rechart";
import Map from "../components/map";
import _ from "lodash";

class WeatherList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderWeather(cityData) {
    const name = cityData.city.name;

    const temperatures = _.map(
      cityData.list.map(weather => weather.main.temp),
      kelvin => kelvin - 273
    );
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td style={{ width: "200px", height: "200px" }}>
          <Map center={{ lat, lng: lon }} zoom={10} />
        </td>
        <td>
          <ReChart data={temperatures} color="orange" units="c°" />
        </td>
        <td>
          <ReChart data={pressures} color="yellow" units="hPa" />
        </td>
        <td>
          <ReChart data={humidities} color="green" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover table-chart">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (c°)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);

//
// <td>
//   <Sparklines data={temperatures} width="180" height="120">
//     <SparklinesLine color="red" />
//   </Sparklines>
// </td>
// <td>
//   <Sparklines data={pressures} width="180" height="120">
//     <SparklinesLine color="blue" />
//   </Sparklines>
// </td>
// <td>
//   <Sparklines data={humidities} width="180" height="120">
//     <SparklinesLine color="green" />
//   </Sparklines>
// </td>
