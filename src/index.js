import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/header.css';
import './css/home.css';
import './css/projects.css';
import './css/experience.css';
import './css/contact.css';
import './css/button.css';
import './css/archive.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);