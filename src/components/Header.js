import React from "react";
import { Layout, Menu } from 'antd';
import { Link, Location } from '@reach/router';

const Header = () => (
    <Layout.Header>
        <div className="logo" />
          <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1"><Link to="/">Elephants</Link></Menu.Item>
            <Menu.Item key="2"><Link to="">Areas</Link></Menu.Item>
            <Menu.Item key="3">Certificates</Menu.Item>
            <Menu.Item key="4">Flagged</Menu.Item>
            <Menu.Item key="5"><Link to="/mapview">MapView</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/crimeoverview">Crime Overview</Link></Menu.Item>
          </Menu>
        
      </Layout.Header>
)

export default Header;