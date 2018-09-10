import React from 'react';
import loginButton from './assests/Login_button.png';

class Login extends React.Component {
  state = {
    email: '',
    username: '',
    password: '',
    confrirmPassword: ''
  };

  handleClick() {
    console.log('Clicked!');
  }

  render() {
    return (
      <div>
        <form>
          <div className="login">
            <div>
              <label htmlFor="username"></label>
              <input className="inputs" type="text" name="username" placeholder="Username"/>
            </div>
            <div>
              <label htmlFor="password"></label>
              <input className="inputs" type="password" name="password" placeholder="Password"/>
            </div>
          </div>
          <button type="submit" className="register-and-login-button" onClick={this.handleClick}><img className="register-and-login-button__img" src={loginButton}/></button>
        </form>
      </div>
    )
  }
};

export default Login;

