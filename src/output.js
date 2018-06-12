import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import './output.css'

//import './output.css';

class Output extends Component {
  render() {
    return (
      <div className="output-main">
        <h1> Diagnosis </h1>
        <div className="output-container">
          <div className="product-class">
            <img id='img-product' src={require(`./images/${this.props.location.state.productClass}.png`)} alt ="" />
            <p>Product Class :{this.props.location.state.productClass}</p> 
          </div>
          <div className="type-class">
            <img id='img-type' src={require(`./images/${this.props.location.state.typeClass}.png`)} alt ="" />
            <p>Type Class :{this.props.location.state.typeClass}</p>          
          </div>
          <div className="sentiment">
            <img id='img-sentiment' src={require(`./images/${this.props.location.state.sentiment}.png`)} alt ="" />
            <p>Sentiment :{this.props.location.state.sentiment}</p> 
          </div>
        </div>
      </div>
    );
  }
}

export default Output;