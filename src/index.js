import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GlobalContext } from 'Context/stateContext';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <GlobalContext>
        <App />
      </GlobalContext>
    </BrowserRouter>
  </React.StrictMode>
);
