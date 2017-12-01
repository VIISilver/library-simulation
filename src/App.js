import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from "react-router-dom";
import Auth from './components/Auth/Auth';
import Browsing from './components/Browsing/Browsing';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div >
          <Route component={Auth} path="/" exact />
          <Route component={Browsing} path='/browsing' />
        </div>
      </HashRouter>
    );
  }
}

export default App;
