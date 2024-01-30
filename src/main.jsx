import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Sixtyfour:400', 'Oswald: 300:400:700', 'Playfair Display:400,500,700']
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
