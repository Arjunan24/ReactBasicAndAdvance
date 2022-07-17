import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { RootContext } from './services/context';

function contextApp() {
  let { theme, setTheme } = useContext(RootContext);
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Current theme : {theme}</p>
        <button
          className='App-link'
          onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
        >
          Change Theme
        </button>
      </header>
    </div>
  );
}

export default contextApp;
