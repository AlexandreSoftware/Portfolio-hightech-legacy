import React from 'react';
import ReactDOM from 'react-dom';
import './css/Index.css';
import './css/Style.css';

import reportWebVitals from './reportWebVitals';
import Navbar from "./Containers/Navbar"
import Webgl from "./Containers/Webgl"
import App from './Containers/App';
import Footer from "./Containers/Footer"
import { BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Navbar />
      <Webgl />
      <App />
      <Footer />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
