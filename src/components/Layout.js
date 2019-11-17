import React from "react";
import Header from "./Header";
import { version, Layout, Menu, Breadcrumb, Card, Row, Col, Statistic, Icon } from "antd";

const {  Content, Footer } = Layout;

function App(props) {
  return (
    <Layout className="layout">
      <Header />
      <Content style={{ padding: "0 50px", margin: "20px 0px" }}>
        {props.children}
      </Content>
      <Footer style={{ textAlign: "center" }}>Zoovengers</Footer>
    </Layout>
  );
}

export default App;
