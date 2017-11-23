import React,{Component} from 'react';
// import ReactMapGL from 'react-map-gl';
import GoogleMapReact from 'google-map-react';

export default class Map extends Component {

    render() {
      // ReactMapGL.accessToken = 'pk.eyJ1IjoiYWRyaWVucG9seSIsImEiOiJYX3lNczhBIn0.QOz0tY3HwZJ1RYLtF2Kn1w'
      console.log('lat ', this.props.center.lat);
      console.log('lon ', this.props.center.lng);
        return (
          <GoogleMapReact
            center={this.props.center}
            zoom={this.props.zoom}
          />
        );
    }
}
