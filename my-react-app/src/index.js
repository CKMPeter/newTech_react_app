import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
  document.getElementById("root")
);

