import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="home-main">
        <Link to="/">
          <input id="btnLogout" type="button" value="Logout"/>
        </Link>

        <div className="home-container">
          <div>
            <img id="main-background" src={require("./images/bg.png")} alt=""/>
            <Link to="/userinput">
              <img id="tap-user" src={require('./images/doc.jpg')} alt=""/>
            </Link>            
          </div>          
        </div>

      </div>
    );
  }
}

export default Home;