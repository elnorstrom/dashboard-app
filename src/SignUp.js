import React from 'react';
import registerButton from './assests/Register_button.png';
import addPicture from './assests/Add_picture.png';

class SignUp extends React.Component {
  state = {
    email: '',
    username: '',
    password: '',
    confrirmPassword: ''
  };

  onEmailChange() {
    console.log('email change!');
  }

  handleClick() {
    console.log('Submitted!');
  }

  render() {
    return (
      <div>
        <form className="sign-up-form">
          <div className="sign-up">
            <div>
              <label htmlFor="username"></label>
              <input className="inputs" type="text" name="username" placeholder="Username"/>
            </div>
            <div>
              <label onChange={this.onEmailChange} htmlFor="email"></label>
              <input className="inputs" type="email" name="email" placeholder="Email"/>
            </div>
            <div>
              <label htmlFor="password"></label>
              <input className="inputs" type="text" name="password" placeholder="Password"/>
            </div>
            <div>
              <label htmlFor="confirmPassword"></label>
              <input className="inputs" type="text" name="confirmPassword" placeholder="Confirm Password"/>
            </div>
          </div>
          <div className="add-picture-container">
            <img className="add-picture" src={addPicture}/>
            <input className="add-picture-input" type="file" placeholder="Add picture"/>
            <p className="add-picture-input">Add Picture</p>
          </div>
          <button className="login-and-sign-up-button sign-up-button" onClick={this.handleClick}><img className="login-and-sign-up__img" src={registerButton}/></button>
        </form>
      </div>
    )
  }
};

export default SignUp;
