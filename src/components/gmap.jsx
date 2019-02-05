import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const anyReactComponent = ({ text }) => <div>{text}</div>;

class GMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return(
      <div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom} >
          <Marker
            lat={59.95541}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Gmap;
