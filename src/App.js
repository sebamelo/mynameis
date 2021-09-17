import React from 'react';
import logo from './logo.svg';
import './App.css';
import Typing from './components/Typing';
import Layout from './components/layout/Layout';
import MainProfile from './components/MainProfile/MainProfile';
import ProfileImgs from './components/ProfileImg/ProfileImg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
        <Switch>
            <Route path="/meme">
                <div className="App">
                    <header className="App-header">
                        <Layout/>
                        <MainProfile image={'/profileBlueTshirt.png'} profileImgClassname={'profile-img meme-img'}/>
                    </header>
                </div>
            </Route>
            <Route path="/">
                <div className="App">
                    <header className="App-header">
                        <Layout/>
                        <MainProfile image={'/profileBlueTshirt.png'} profileImgClassname={'profile-img'}/>
                    </header>
                </div>
            </Route>
            
        </Switch>
    </Router>
    
  );
}

export default App;
