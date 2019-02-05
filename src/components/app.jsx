import React, { Component } from 'react';

import FlatList from './flat_list.jsx';
import Gmap from './gmap.jsx';
import flats from '../../data/flats.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlat: flats[0]
    };

  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  render() {
    return(
      <div>
        <FlatList flats={this.state.flats} selectFlat={this.selectFlat} selectedFlat={this.state.selectedFlat} />
        <div className="map-container">
          <Gmap selectedFlat={this.state.selectedFlat} />
        </div>
      </div>
    )
  }
}

export default App;
