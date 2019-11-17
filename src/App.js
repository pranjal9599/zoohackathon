import React from "react";
import "./App.css";
import Layout from './components/Layout';
import { Link } from '@reach/router';
import { version,  Menu, Breadcrumb, Card, Row, Col, Statistic, Icon, Spin } from "antd";
const { Meta } = Card;

function chunks(arr, size) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input should be Array');
  }

  if (typeof size !== 'number') {
    throw new TypeError('Size should be a Number');
  }

  var result = [];
  for (var i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, size + i));
  }

  return result;
};

const ElephantCard = ({name="Laxmi", owner="Raja", rfid="00064DEBDE7", id="", location="MP", gender="F", age=12, health="Good"}) => (
  <Card
    hoverable
    cover={
      <img
        alt="example"
        src={`https://source.unsplash.com/720x${Math.floor(Math.random() * 720) + 120}?elephant`}
        style={{height: "300px", objectFit: "cover"}}
      />
    }
  >
    <Meta title={name} description={rfid} />
    <p style={{ padding: '5px 0px'}}>Owner: <a href="#">{owner}</a></p>

    <Row gutter={24} style={{ padding: '15px 0px'}}>
      <Col span={6}>
        <Statistic title="Age" value={age} prefix={<Icon type="column-height" />} />
      </Col>
      <Col span={6}>
        <Statistic title="Health" valueStyle={{ color: '#3f8600' }} value={health} prefix={<Icon type="medicine-box" />} />
      </Col>
      <Col span={6}>
        <Statistic title="Location" value={location.substring(0,3)} prefix={<Icon type="pushpin" />} />
      </Col>
      <Col span={6}>
        <Statistic title="Gender" value={gender} />
      </Col>
    </Row>

  </Card>

)

class App extends React.Component {
  state = {
    loading: true
  }

  data = []

  async componentDidMount() {
    const response = await fetch('http://localhost:3333/')
    const json = await response.json();
    console.log(json)
    json.splice(0,1);
    json.reverse();
    this.data = chunks(json,4);
    this.setState({loading: false})
    console.log(this.data)
  }

  render() {


  return (
    <Layout>
        <div style={{ background: "#fff", padding: 24, minHeight: "100vh" }}>
          {this.state.loading && <Spin />}
          {!this.state.loading &&
          this.data.map(row => (
            <Row gutter={16} style={{padding: '20px 0px'}}>
            {
              row.map(elep => (
                <Col span={6} key={elep[0]}>
                  <Link to={`/detail/${elep[0]}`}>
                    <ElephantCard name={elep[5]} rfid={elep[2]} location={elep[6]} age={elep[11]} owner={elep[3]} health={elep[9]}/>
                  </Link>
                </Col>
              ))
            }
            </Row>
          ))
          }
        </div>
    </Layout>
  );
  }
}

export default App;
