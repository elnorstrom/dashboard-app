import React from 'react';
import registerButton from './assests/Register_button.png';
import addPicture from './assests/Add_picture.png';
import { Link } from 'react-router-dom';

const SignUp = (props) => (
  <div>
    <form
      className="sign-up-form"
      onSubmit={props.handleSignUp}
    >
      <div className="sign-up">
        <div>
          <label htmlFor="username"></label>
          <input
            className="inputs"
            type="text"
            name="username"
            placeholder="Username"
            required
            onChange={(e) => props.handleUsername(e)}
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            className="inputs"
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={(e) => props.handleEmailChange(e)}/>
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            className="inputs"
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => props.handlePassword(e)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword"></label>
          <input
            className="inputs"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            onChange={(e) => props.handleConfirmPassword(e)}
          />
        </div>
      </div>
      {props.passwordsDoNotMatch ? <p>Sorry, the provided passwords do not match, please try again.</p> : <p>&nbsp;</p> }
      <div className="add-picture-container">
        <img className="add-picture" src={addPicture}/>
        <input className="add-picture-input" type="file" placeholder="Add picture"/>
        <p className="add-picture-input">Add Picture</p>
      </div>
      <button
        type="submit"
        className="login-and-sign-up-button sign-up-button"
      >
        <img
          className="login-and-sign-up__img"
          src={registerButton}
        />
      </button>
    </form>
    <div className="link-container">
      <p>Already a member?</p>
      <Link className="link" to="/login">&nbsp;Login</Link>
  </div>
  <div onClick={() => console.log(props.user.users)}>Show users</div>
  </div>
);

export default SignUp;

