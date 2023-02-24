import React, { Component } from 'react';
import './App.css';
import { longdo, map, LongdoMap } from './longdo-map/LongdoMap';
//replace a LongdoMap.js file

class loadMap extends Component {

  initMap(){
    map.Layers.setBase(longdo.Layers.GRAY);
  }

  render() {
    const mapKey = '7981330392aa890325a05476e64debcb'
    return (
      <div className="App">
        <LongdoMap id="longdo-map" mapKey={mapKey} callback={this.initMap} />
      </div>
    );
  }
}

export default loadMap;