import React from 'react';
import ReactDOM from 'react-dom';
import './css/Index.css';
import './css/Style.css';

import reportWebVitals from './reportWebVitals';
import Navbar from "./Navbar"
import Webgl from "./Webgl"
import App from './App';
import Footer from "./Footer"
ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Webgl />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
