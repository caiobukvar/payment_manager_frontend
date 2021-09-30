import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

