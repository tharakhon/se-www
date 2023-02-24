import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './loadMap';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuccessPage from './loadSuccess';
import SelectLabels from './SeleteDrop';
import CheckBug from './CheckBug';
import Bank from './Bank';
import Nav from './Nav';
import loadMap from './loadMap';
import { LongdoMap } from './longdo-map/LongdoMap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
