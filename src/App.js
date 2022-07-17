import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Navigation from './Components/Navigation';
import { useEffect, useState } from 'react';
import { ChildContext, RootContext } from './services/context';
import ParentFunctionComponentWithPropDrilling from './Components/ParentFunctionComponentWithPropDrilling';

function App(props) {
  let [isAuth, setAuth] = useState(true);
  let [modal, setModal] = useState('Laptop');

  return (
    <RootContext.Provider value={{ isAuth, setAuth: setAuth }}>
      <ChildContext.Provider value={{ modal, setModal: setModal }}>
        <div>
          <Navigation />
          <h1>We are in home</h1>
        </div>
        <ParentFunctionComponentWithPropDrilling {...props} />
      </ChildContext.Provider>
    </RootContext.Provider>
  );
}

export default App;
