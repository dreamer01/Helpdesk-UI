import React, {Component} from 'react';

import './login.css'

class Login extends Component{
    render(){
        return(
            <div className='login'>
                <form className='login-form'>
                    <input type='text' placeholder='Enter UserName...' />
                    <input type='password' placeholder='Enter Password...'/>
                    <input id="btnLogin" type='button' value='Login'/>
                    <input id="btnCancel" type='button' value='Cancel'/>
                </form>
            </div>
        );
    }    
}

export default Login;