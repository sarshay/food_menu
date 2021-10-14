import 'ol/ol.css';
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Map from "ol/Map.js";
import View from "ol/View.js";
import Overlay from "ol/Overlay.js";
import LayerTile from "ol/layer/Tile.js";
import SourceOSM from "ol/source/OSM.js";
import {fromLonLat} from 'ol/proj';
// import './MapExample.css';
import FoodBankIcon from '@mui/icons-material/FoodBank';

const sittwe = fromLonLat( [92.8324102,20.1598002]);
const yangon = fromLonLat( [96.1735, 16.8409]);

export default class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        center: sittwe,
        zoom: 10 
    };
    // const viewExtent = [1817379, 6139595, 1827851, 6143616];
    this.map = new Map({
      target: null, // set this in componentDidMount
      layers: [
        new LayerTile({
          source: new SourceOSM(),
          attributionsCollapsible: true,
          // url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        }), 
      ],
      view: new View({
        // extent: viewExtent,
        center: this.state.center,
        zoom: this.state.zoom
      })
    });
  }

  updateMap(location,zoom){
    this.map.setTarget("map");
    this.setState({ center: location, zoom: zoom });
    const overlay = new Overlay({
      position: location,
      element: ReactDOM.findDOMNode(this).querySelector('#overlay'),
      positioning: 'center-center',
      stopEvent: false
    });
    this.map.addOverlay(overlay);
  }
  
  componentDidMount() {
    this.updateMap(sittwe,13)
  }
  componentWillUnmount() {
    this.updateMap(sittwe,13)
  }
  refresh() {
    this.map.getView().setCenter(this.state.center);
    this.map.getView().setZoom(this.state.zoom);
  }
  render() {
    this.refresh();
    return (
        <div>
        <div>
            <div id="map" style={{ width: "100%", height: "80vh" }}/>
            <div id="overlay" title="overlay"><FoodBankIcon/></div>
        </div>
        
        <button onClick={e => this.updateMap(sittwe,10)}>sittwe</button>
        <button onClick={e => this.updateMap(yangon,10)}>yangon</button>
        </div>
    );
  }
}