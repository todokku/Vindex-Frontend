import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <div className="App">
          <header className="App-header">
          TagTube
          </header>

        </div>

      </BrowserRouter>
    );
}

export default App;
