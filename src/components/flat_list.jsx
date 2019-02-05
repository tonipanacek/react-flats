import React, { Component } from 'react';
import Flat from './flat.jsx';

const FlatList = ({ flats }) => {
  return(
    <div className="flat-list">
      { flats.map(flat => <Flat key={flat.price} flat={flat} selectFlat={flat.selectFlat} />) }
    </div>
  )
}

export default FlatList;
