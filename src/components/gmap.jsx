import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker.jsx';

const anyReactComponent = ({ text }) => <div>{text}</div>;

class Gmap extends Component {
  static defaultProps = {
    center: {
      lat: 48.85,
      lng: 2.3522
    },
    zoom: 11
  };


  render() {
  const myKey = 'AIzaSyDwwhj6vzUsmr3Ex_zLVz8ka-jMO86zabA';
    return(
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: myKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom} >
          { this.props.selectedFlats.map(flat =>
            <Marker
            lat={flat.lat}
            lng={flat.lng}
            text={'A'}
          />)}
        </GoogleMapReact>
      </div>
    )
  }
}

export default Gmap;
