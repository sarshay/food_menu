import 'ol/ol.css';
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Map from "ol/Map.js";
import View from "ol/View.js";
import Overlay from "ol/Overlay.js";
import LayerTile from "ol/layer/Tile.js";
import SourceOSM from "ol/source/OSM.js";
import { fromLonLat, toLonLat, getUserProjection } from 'ol/proj';
// import './MapExample.css';
import FoodBankIcon from '@mui/icons-material/FoodBank';


import { useCookies } from 'react-cookie';

const sittwe = fromLonLat([92.88273453842031, 20.14107229566872]);
const yangon = fromLonLat([96.1735, 16.8409]);

export default class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: sittwe,
      zoom: 15
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

  updateMap(location, zoom) {
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
    this.updateMap(sittwe, 13)
  }
  componentWillUnmount() {
    this.updateMap(sittwe, 13)
  }
  refresh() {
    this.map.getView().setCenter(this.state.center);
    this.map.getView().setZoom(this.state.zoom);
  }
  seeLonLat() {
    console.log(toLonLat(this.map.getView().getCenter()))
  }
  whereIsMe() {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      alert([long, lat])
    })

    // this.updateMap(yangon, 8)
  }
  render() {
    this.refresh();
    return (
      <React.Fragment>
        <div>
          <div id="map" style={{ width: "100%", height: "50vh" }} />
          <div id="overlay" title="overlay"><FoodBankIcon /></div>
        </div>
        <button onClick={e => this.updateMap(sittwe, 10)}>sittwe</button>
        <button onClick={e => this.updateMap(yangon, 10)}>yangon</button>
        <button onClick={e => this.seeLonLat()}>See Lon LayerTile</button>
        <button onClick={e => this.whereIsMe()}>Where is me</button>
      </React.Fragment>
    );
  }
}