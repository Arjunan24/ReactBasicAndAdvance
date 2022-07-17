import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ParentClass from './ParentClass';
import ParentFunctionComponent from './Components/ParentFunctionComponent';
import ParentFunctionComponentWithPropDrilling from './Components/ParentFunctionComponentWithPropDrilling';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound';
import routes from './Routes';
import RestrictedAccess from './Components/RestrictedAccess';
import PrivateRoute from './Routes/PrivateRoute';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <App />
  <React.StrictMode>
    <Router basename='/'>
      <Routes>
        {routes.map((route) => {
          let { path, ...rest } = route;
          return <Route path={path} element={<PrivateRoute {...rest} />} />;
        })}
      </Routes>
    </Router>

    {/* <ParentClass /> */}
    {/* <ParentFunctionComponent /> */}
    {/* <ParentFunctionComponentWithPropDrilling /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
