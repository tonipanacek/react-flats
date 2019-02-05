import React, { Component } from 'react';
import Flat from './flat.jsx';

const FlatList = (props) => {
  return(
    <div className="flat-list">
      { props.flats.map((flat, index) =>
        <Flat
          key={flat.price}
          index={index}
          flat={flat}
          selectFlat={props.selectFlat}
          selected={flat.name === props.selectedFlat.name}/>) }
    </div>
  )
}

export default FlatList;
