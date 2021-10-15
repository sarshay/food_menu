
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { circular } from 'ol/geom/Polygon';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Control from 'ol/control/Control';



import React, { Component } from "react";
import Map from "ol/Map.js";
import View from "ol/View.js";
import LayerTile from "ol/layer/Tile.js";
import SourceOSM from "ol/source/OSM.js";
import { fromLonLat, toLonLat, getUserProjection } from 'ol/proj';


const sittwe = fromLonLat([92.88273453842031, 20.14107229566872]);
export default function TheMap() {
    const source = new VectorSource();
    const layer = new VectorLayer({
        source: source,
    });

    const map = new Map({
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
            center: sittwe,
            zoom: 14
        })
    });
    map.addLayer(layer);

    navigator.geolocation.watchPosition(
        function (pos) {
            const coords = [pos.coords.longitude, pos.coords.latitude];
            const accuracy = circular(coords, pos.coords.accuracy);
            source.clear(true);
            source.addFeatures([
                new Feature(
                    accuracy.transform('EPSG:4326', map.getView().getProjection())
                ),
                new Feature(new Point(fromLonLat(coords))),
            ]);
        },
        function (error) {
            alert(`ERROR: ${error.message}`);
        },
        {
            enableHighAccuracy: true,
        }
    );

    const locate = document.createElement('div');
    locate.className = 'ol-control ol-unselectable locate';
    locate.innerHTML = '<button title="Locate me">◎</button>';
    locate.addEventListener('click', function () {
        if (!source.isEmpty()) {
            map.getView().fit(source.getExtent(), {
                maxZoom: 18,
                duration: 500,
            });
        }
    });
    map.addControl(
        new Control({
            element: locate,
        })
    );
    return (
        <React.Fragment>
            <div>
                <div id="map" style={{ width: "100%", height: "50vh" }} />
            </div>
        </React.Fragment>
    );
}
