import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './Components/DataProvider/DataProvider';
import {initialState, reducer} from './Utility/reducer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Amazon-Project-Class-2025">
  <DataProvider>
    <App />
  </DataProvider>
  </BrowserRouter>
);
