import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Data from "./data";

ReactDOM.render(
  <React.StrictMode>
      <Suspense fallback={<div/>}>
          <Router>
              <Switch>
                  <Route path={'/calender'} component={App}/>
                  <Route path={'/data'} component={Data}/>
                  <Redirect from="/" to='/calender'/>
              </Switch>
          </Router>
      </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
