import React, { Component } from "react";
// import ReactMapGL from 'react-map-gl';
import GoogleMapReact from "google-map-react";

export default class Map extends Component {
  render() {
    // ReactMapGL.accessToken = 'pk.eyJ1IjoiYWRyaWVucG9seSIsImEiOiJYX3lNczhBIn0.QOz0tY3HwZJ1RYLtF2Kn1w'
    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyDi1gqjjjqfcUJGF3Aa26S1usS1DsDGzfo"
        }}
        center={this.props.center}
        zoom={this.props.zoom}
      />
    );
  }
}
