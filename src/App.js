import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Output from './output'
import ImageSlider from './slider';
import Callback from './callback'
import UserInput from './userinput'
import Home from './home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{margin:"auto"}}>Avengers to Help.</h1>
        </header>

        <div className="app-container">
          <Route exact={true} path="/" component={ImageSlider}/>
          <Route exact={true} path="/home" component={Home}/>
          <Route exact={true} path="/callback" component={Callback}/>
          <Route exact={true} path="/userinput" component={UserInput}/>
          <Route exact={true} path="/output" component={Output}/>
        </div>

      </div>
    );
  }
}

export default App;
