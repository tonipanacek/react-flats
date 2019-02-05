import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker.jsx';
import GOOGLE_API_KEY from '../../.env'

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
  const myKey = GOOGLE_API_KEY;
    return(
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: myKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom} >
          <Marker
          lat={this.props.selectedFlat.lat}
          lng={this.props.selectedFlat.lng}
          text={'A'}
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Gmap;
