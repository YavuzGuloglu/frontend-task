import React from 'react';
import logo from './logo.svg';
import './App.css';
import { setSort } from './features/slices/slice';
import './assets/css/main.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './app/routes';
function App() {



  return (
    <BrowserRouter>
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
