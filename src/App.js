import React from 'react';

import Mynameis from './components/Mynameis';
import logo from './logo.svg';
import './App.css';
import Typing from './components/Typing';
import TypeLoop from './components/TypeLoop';
import Layout from './components/layout/Layout';
import MainProfile from './components/MainProfile/MainProfile';
import ProfileImgs from './components/ProfileImg/ProfileImg';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Layout></Layout>
        <MainProfile/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
