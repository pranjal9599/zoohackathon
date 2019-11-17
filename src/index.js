import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Location } from "@reach/router"

import "antd/dist/antd.css";
import './index.css';
import App from './App';
import DetailPage from './pages/DetailPage.js';
import Owner from './pages/Owner.js';
import MapView from './pages/MapView';
import CrimeOverview from './pages/CrimeOverview';


import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <Router>
    <App path="/" />
    <Owner path="/owner" />
    <DetailPage path="/detail/:id" />
    <MapView path="/mapview" />
    <CrimeOverview path="/crimeoverview" />
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
