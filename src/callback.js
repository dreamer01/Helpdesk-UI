import React, { Component } from 'react';
import { Link, Route, Switch, Redirect} from 'react-router-dom';

import Home from './home'
import loading from './images/loading.gif'


class Callback extends Component {
  render() {
    return (
      <div className="Callback">
        <Link to="/">
          <input id="btnLogout" type="button" value="Logout"/>
        </Link>

        <div className="callback-container">
            <img src={loading} alt="Loading"/>
        </div>

        <Redirect to='/home' component={Home}/>

      </div>
    );
  }
}

export default Callback;
