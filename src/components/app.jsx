import React, { Component } from 'react';

import FlatList from './flat_list.jsx';
import Gmap from './gmap.jsx';
import Flats from '../../data/flats.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: Flats,
      selectedFlats: Flats
    };

  }

  selectFlat = (flat) => {
    console.log(flat.props);
  }

  render() {
    return(
      <div>
        <FlatList flats={this.state.flats} selectFlat={this.selectFlat} />
        <div className="map-container">
          <Gmap selectedFlats={this.state.selectedFlats} />
        </div>
      </div>
    )
  }
}

export default App;
