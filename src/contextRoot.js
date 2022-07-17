import { useState } from 'react';
import App from './App';
import './App.css';
import { RootContext } from './services/context';

function ContextRoot() {
  let [theme, setTheme] = useState('light');

  return (
    <RootContext.Provider value={{ theme, setTheme: setTheme }}>
      <h1>App Root</h1>
      <App />
    </RootContext.Provider>
  );
}

export default ContextRoot;
