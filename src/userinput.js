import React, {Component} from 'react'

import './userinput.css'

/*Popup Component*/
class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
          <img id='img-process' src={require('./images/procezzing.gif')} alt="" />
      </div>
    );
  }
}


/*User Input Main Component*/
class UserInput extends Component {
    constructor(props){
      super(props)
      this.state ={userdata:null,productClass:null,typeClass:null,sentiment:null,showPopup :false,};
      this.helpFn = this.helpFn.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    helpFn = () =>{
      this.setState({showPopup: true});

      fetch(`https://7b8051b3.ngrok.io`,{
        method: "POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({"Text" : this.state.userdata})
      }).then(response=> {
          return(response.json());
      }).then(data => {
          console.log(data);
          this.setState({"productClass": `${data.Complain_product_class}`, "typeClass": `${data.complain_type_class}` ,"sentiment" : `${data.sentiment}`, "response": `${data.response}`} );
          this.props.history.push({
              pathname: '/output',
              state: {"productClass": `${data.Complain_product_class}`, "typeClass": `${data.complain_type_class}` ,"sentiment" : `${data.sentiment}`, "response": `${data.response}`} });
      })
    }

    handleChange = (e) =>{
      e.preventDefault();
      this.setState({userdata:e.target.value});
    }

    render() {
      return (
        <div className="input-main">
          <img id='img-notepad' src={require('./images/notepad.jpg')} alt=""/>
          <textarea id="txtInput"  rows="10" onChange={(e) => {this.handleChange(e)}} />
          <input type="button" id="btnHelp" onClick={this.helpFn} value="Help" />

          { this.state.showPopup
              ? <Popup/>
              : null
          }
        </div>
      );
    }
}

export default UserInput ;
