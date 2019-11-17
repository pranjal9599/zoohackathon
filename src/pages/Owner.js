import React from 'react';
import Layout from '../components/Layout';
import ReactMapboxGl,{Layer, GeoJSONLayer, Feature} from "react-mapbox-gl";
import * as MapboxGL from 'mapbox-gl';
import {Typography, Divider, Timeline, Row, Col, Statistic, Icon, Avatar, Badge, Button, Table, Tag} from 'antd';
import {columns, data} from '../configs/violations';

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
    'line-width': 12
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

    
    return (
      <Layout>
      <div style={{ background: "#fff", padding: 24, minHeight: "100vh" }}>
          <div style={{padding: "40px 0px"}}>
            <Row gutter={12}>
                <Col span={3}>
                    <Badge count={60} style={{ backgroundColor: '#52c41a' }}>
                        <Avatar src="https://source.unsplash.com/500x500?headshot" size={150} />
                    </Badge>
                </Col>
                <Col span={21}>
                <Title level={4}>Owner Name</Title>
                <Row gutter={0} style={{ padding: '15px 0px'}}>
                  <Col span={2}>
                    <Statistic title="Age" value={12} prefix={<Icon type="column-height" />} />
                  </Col>
                  <Col span={2}>
                    <Statistic title="Health" valueStyle={{ color: '#3f8600' }} value={"Good"} prefix={<Icon type="medicine-box" />} />
                  </Col>
                  <Col span={2}>
                    <Statistic title="Location" value={"India"} prefix={<Icon type="pushpin" />} />
                  </Col>
                  <Col span={2}>
                    <Statistic title="Weight" value={"1.6T"} prefix={<Icon type="car" />} />
                  </Col>
                  <Col span={2}>
                    <a href="#"><Statistic title="Owner" value={"Jay Doe"} prefix={<Icon type="user" />} /></a>
                  </Col>
                </Row>
                <Button type="primary" size="large" >Certificates</Button>
                <Button size="large" style={{margin: '10px'}}>Records</Button>
                </Col>
            </Row>

          </div>
            <Divider />
        <Divider />
        <div>
            <Title>Violations</Title>
            <Table columns={columns} dataSource={data} />
        </div>
      </div>
      </Layout>
    );
}

export default DetailPage;