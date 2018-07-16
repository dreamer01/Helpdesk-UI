import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import './output.css'

//import './output.css';

class Output extends Component {
  constructor(){
    super();
    this.state= {classTile : 'labels'};
    //this.animate= this.animate.bind(this);
  }

  componentDidMount(){
    setInterval(() => {
      console.log('I am here');
      if(this.state.classTile=== 'labels')
        this.setState({classTile:'labels effect'})
      else
        this.setState({classTile:'labels'})
    },2000);
  }


  render() {
    return (
      <div className="output-main">
        <h1> Diagnosis </h1>
        <div className="output-container">

          <div className="label-container">
            <div id="product-class" className={this.state.classTile}>
              <div className="face front" ><p>Product Class</p></div>
              <div className="face back" >
                <img id='img-product' src={require(`./images/${this.props.location.state.productClass}.png`)} alt ="" />
                <p>{this.props.location.state.productClass}</p>
              </div>
            </div>
            <div id="type-class" className={this.state.classTile}>
              <div className="face front" ><p>Type Class</p></div>
              <div className="face back" >
                <img id='img-type' src={require(`./images/${this.props.location.state.typeClass}.png`)} alt ="" />
                <p>{this.props.location.state.typeClass}</p>
              </div>
            </div>
            <div id="sentiment" className={this.state.classTile}>
              <div className="face front" ><p>Sentiment</p></div>
              <div className="face back" >
                <img id='img-sentiment' src={require(`./images/${this.props.location.state.sentiment}.png`)} alt ="" />
                <p>{this.props.location.state.sentiment}</p>
              </div>
            </div>
          </div>

          <div className="response">
            <p>{this.props.location.state.response}</p>
          </div>

        </div>
      </div>
    );
  }
}

export default Output;
