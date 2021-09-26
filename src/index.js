import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import Main from './pages/Main';
import SignIn from './pages/SignIn';

ReactDOM.render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>,
  document.getElementById('root')
);

