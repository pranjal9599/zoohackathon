import React, {useState} from 'react';
import Layout from '../components/Layout';
import ReactMapboxGl,{Layer, GeoJSONLayer, Feature, Popup} from "react-mapbox-gl";
import * as MapboxGL from 'mapbox-gl';
import {Typography, Divider, Timeline, Row, Col, Statistic, Icon, Avatar, Badge, Button, Table, Tag} from 'antd';
import {columns, data} from '../configs/violations';
import {svg} from '../configs/elephant.js';

const {Title, Paragraph} = Typography;

const route = require('../configs/routes.json');

const geojson = require('../configs/geodata.json')


const Mapbox = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoicHJhbi0iLCJhIjoiY2szMTd4ejM2MDN1OTNtcDl0NjZyOWdoNCJ9.BEwsOD5Mk97WrawOxFpA8A",
    attributionControl: false,
});

const mapStyle= {
    height: "500px"
}

const symbolLayout = {
    'text-field': '{place}',
    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
    'text-offset': [0, 0.6],
    'text-anchor': 'top'
  };
  const symbolPaint = {
    'text-color': 'white'
  };
  
  const circleLayout = { visibility: 'visible' };
  const circlePaint = {
    'circle-color': 'white'
  };

  const lineLayout = {
    'line-cap': 'round',
    'line-join': 'round'
  };

  const linePaint = {
    'line-color': '#4790E5',
    'line-width': 3,
  };
  


const paintLayer = {
    'fill-extrusion-color': '#aaa',
    'fill-extrusion-height': {
      type: 'identity' ,
      property: 'height'
    },
    'fill-extrusion-base': {
      type: 'identity' ,
      property: 'min_height'
    },
    'fill-extrusion-opacity': 0.2
  };

  const mappedRoute = geojson.features.map(
    point => [point.properties.lon, point.properties.lat]
  );


const layoutLayer = { 'icon-image': 'londonCycle' };

// Create an image for the Layer
const image = new Image();
image.src = 'data:image/svg+xml;charset=utf-8;base64,' + btoa(svg);
const images= ['londonCycle', image];

function DetailPage(props) {
    let zoom = [15];
    let bearing = [-50];
    let pitch = [50];
    let center = [-0.13235092163085938, 51.518250335096376];

    let [ele, setEle] = useState(undefined);
    
    return (
      <Layout>
      <div style={{ background: "#fff", padding: 24, minHeight: "100vh" }}>

        <Mapbox
            style="mapbox://styles/mapbox/dark-v9"
            center={center}
            zoom={zoom}
            containerStyle={mapStyle}
            flyToOptions={{ speed: 0.8 }}
        >
            <Layer type="symbol" id="marker" layout={layoutLayer} images={images}>
                <Feature
              key={1}
                coordinates={[-0.13235092163085938, 51.518250335096376]}
                onClick={() => setEle(1)}
                />
            </Layer>
          {
            ele && (
            <Popup key={1} coordinates={[-0.13235092163085938, 51.518250335096376]}>
              <div>
                <div>Name</div>
                <div>
                  Hello world
                </div>
              </div>
            </Popup>
            )
          }
        
        </Mapbox>

      </div>
      </Layout>
    );
}

export default DetailPage;