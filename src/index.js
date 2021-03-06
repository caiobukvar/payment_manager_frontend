import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar="true"
      closeOnClick={true}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

