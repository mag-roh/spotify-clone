import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import reducer, { initialState } from './Reducer';
import { DataLayer } from './DataLayer';


//const root = ReactDom.createRoot(document.getElementById('root'));
ReactDom.render(
  <React.StrictMode>
    <DataLayer initialState = {initialState} reducer = {reducer}>
       <App></App>
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//serviceWorker.unregister();
