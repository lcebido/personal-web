import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import WebFont from 'webfontloader';
import App from './App';
import './sass/global.scss';

WebFont.load({
  google: {
    families: ['Roboto:100,200,300,400','Pattaya', 'Montserrat:700,800,900', 'Titillium Web:300,400,700', 'sans-serif']
  }
});

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

