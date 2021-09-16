import React from 'react';
import logo from './logo.svg';
import './App.css';
import Typing from './components/Typing';
import Layout from './components/layout/Layout';
import MainProfile from './components/MainProfile/MainProfile';
import ProfileImgs from './components/ProfileImg/ProfileImg';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Layout></Layout>
        <MainProfile/>
        
      </header>
    </div>
  );
}

export default App;
