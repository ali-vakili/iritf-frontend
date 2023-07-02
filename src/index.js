import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.rtl.min.css";
import './index.scss';

axios.defaults.baseURL = process.env.REACT_APP_API_URL

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
