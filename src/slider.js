import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Coverflow from 'react-coverflow';

import './slider.css'
import Auth from './Auth/auth.js';

const auth = new Auth();
class ImageSlider extends Component {
    constructor(props) {
        super(props);
            
        // This binding is necessary to make `this` work in the callback
        this.login = this.login.bind(this);
      }
    login (){
        auth.login();
    }
    render(){
        return(
            <div>
                <Coverflow
                    height={575}
                    displayQuantityOfSide={2}
                    navigation={false}
                    enableHeading={false}
                >
                    <img src={require('./images/ironman.jpg')} alt='Spider Man'/>
                    <img src={require('./images/spiderman.jpg')} alt='Doctar Strange' />
                    <img src={require('./images/antman.jpg')} alt='Spider Man'/>
                    <img src={require('./images/doctarstrange.jpg')} alt='Doctar Strange' />
                    <img src={require('./images/groot.jpg')} alt='Spider Man'/>
                    <img src={require('./images/captainamerica.jpg')} alt='Doctar Strange' />
                </Coverflow>

                <input id="btnSignin" type="button" value="Sign In" onClick={this.login} />
            </div>
        )
    }
}

export default ImageSlider;