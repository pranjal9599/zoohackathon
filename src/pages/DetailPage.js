import React, {useState, useEffect} from 'react';
import Layout from '../components/Layout';
import ReactMapboxGl,{Layer, GeoJSONLayer, Feature} from "react-mapbox-gl";
import * as MapboxGL from 'mapbox-gl';
import {Typography, Divider, Timeline, Row, Col, Statistic, Icon, Avatar, Badge, Button, Table, Tag} from 'antd';
import {columns, data} from '../configs/violations';
import { get } from 'http';

const {Title, Paragraph} = Typography;

const route = require('../configs/routes.json');

const geojson = require('../configs/geodata.json')


const Map = ReactMapboxGl({
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


function DetailPage(props) {
    let zoom = [15];
    let bearing = [-50];
    let pitch = [50];
    let center = [ -77.02827, 38.91427];
    let [loading, setLoading] = useState(false);
    let [elephantData, setData] = useState([]);
    
    useEffect(() => {
      async function getData() {
        const res = await fetch(`http://localhost:3333/${props.id}`)
        const json = await res.json();
        setData(json[0]);
        setLoading(false)
      }
      getData();
    }, [])

  
    
      return (
        <Layout>
        <div style={{ background: "#fff", padding: 24, minHeight: "100vh" }}>
            <div style={{padding: "40px 0px"}}>
              {!loading && (
                <Row gutter={12}>
                  <Col span={3}>
                      <Badge count={60} style={{ backgroundColor: '#1890ff' }}>
                          <Avatar src="https://source.unsplash.com/500x500?elephant" size={150} />
                      </Badge>
                  </Col>
                  <Col span={21}>
                <Title level={4}>{elephantData[5]}</Title>
                  <Row gutter={0} style={{ padding: '15px 0px'}}>
                    <Col span={2}>
                      <Statistic title="Age" value={elephantData[11]} prefix={<Icon type="column-height" />} />
                    </Col>
                    <Col span={2}>
                      <Statistic title="Health" valueStyle={{ color: '#3f8600' }} value={elephantData[9]} prefix={<Icon type="medicine-box" />} />
                    </Col>
                    <Col span={2}>
                      <Statistic title="Location" value={elephantData[6]} prefix={<Icon type="pushpin" />} />
                    </Col>
                    <Col span={2}>
                      <Statistic title="Gender" value={elephantData[12]}  />
                    </Col>
                    <Col span={2}>
                      <a href="#"><Statistic title="Owner" value={elephantData[3]} prefix={<Icon type="user" />} /></a>
                    </Col>
                  </Row>
                  <Button type="primary" size="large" >Certificates</Button>
                  <Button size="large" style={{margin: '10px'}}>Records</Button>
                  </Col>
              </Row>
              )}
              

            </div>
              <Divider />
            <div>

              <Title>Timeline</Title>
              <Row gutter={16}>
                  <Col span={12}>
                      <Title level={3}>Events</Title>
                  <Timeline>
                      <Timeline.Item color="blue">
                      <b>Medical Checkup</b>
                      <p>12/9/2019</p>
                      </Timeline.Item>
                      <Timeline.Item color="red">
                      <b>Missed Medical Checkup
                      </b>
                      <p>12/9/2019</p>
                      </Timeline.Item>
                      <Timeline.Item color="yellow">
                      <b>Major Movement</b>
                      </Timeline.Item>
                      <Timeline.Item color="grey">
                      <b>Location Idle for long period</b>
                      <p>12/9/2019</p>
                      </Timeline.Item>
                      <Timeline.Item color="blue">
                      <b>Medical Checkup</b>
                      <p>12/9/2019</p>
                      </Timeline.Item>
                      <Timeline.Item color="blue">
                      <b>Medical Checkup</b>
                      <p>12/9/2019</p>
                      </Timeline.Item>
                      <Timeline.Item color="blue">
                      <b>Medical Checkup</b>
                      <p>12/9/2019</p>
                      </Timeline.Item>
                  </Timeline>
                  </Col>
                  <Col span={12}>
                  <Timeline>
                      <Title level={3}>Ownership</Title>
      
                      <Timeline.Item color="green"><b>Mohan Pal</b> <p>Present - 2018-09-12 </p></Timeline.Item>
                      <Timeline.Item color="grey"><b>Rati</b> <p>2018-09-12 - 2010-07-12</p></Timeline.Item>
                      <Timeline.Item color="grey"><b>Neerun</b> <p>2010-07-12 - 2007-01-12</p></Timeline.Item>
                      <Timeline.Item color="blue"><b>Zoo</b>  <p>2007-01-12 - Born</p></Timeline.Item>
                  </Timeline>
                  </Col>
              </Row>



            </div>
          <div>

          <Divider />

          <Title>Route throughout</Title>
          <Map
            style="mapbox://styles/mapbox/dark-v9"
            containerStyle={mapStyle}
            zoom={zoom}
            center={center}
            pitch={pitch}
            bearing={bearing}
          >
            <Layer
              id="3d-buildings"
              sourceId="composite"
              sourceLayer="building"
              filter={["==", "extrude", "true"]}
              type="fill-extrusion"
              minZoom={14}
              paint={paintLayer}
            />

            <Layer type="line" layout={lineLayout} paint={linePaint}>
              <Feature coordinates={mappedRoute} />
            </Layer>

            <GeoJSONLayer
              data={geojson}
              circleLayout={circleLayout}
              circlePaint={circlePaint}
              symbolLayout={symbolLayout}
              symbolPaint={symbolPaint}
          />
          </Map>
          </div>
          <Divider />
          <Title>Violations</Title>
          <div>
              <Table columns={columns} dataSource={data} />
          </div>
        </div>
        </Layout>
      )
    }

export default DetailPage;