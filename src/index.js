import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppState } from './context';
import state from './store';
import './index.css';
import './assets/style.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppState.Provider value={state}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppState.Provider>
  </React.StrictMode>
);
