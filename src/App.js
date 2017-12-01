import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Auth from './components/Auth/Auth';

class App extends Component {
  render() {
    return (
      <div >
        <Route component={Auth} path="/" exact />
      </div>
    );
  }
}

export default App;
