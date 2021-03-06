import React from 'react';
import loginButton from '../assests/Login_button.png';
import { Link } from 'react-router-dom';

const Login = (props) => (
  <div>
    <form
      className="sign-up-and-login-form"
      onSubmit={(e) => props.handleLogIn(e)}>
      <div className="login">
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
      </div>
      {props.incorrectLogin ? <p>Sorry, the login details do not match, please try again.</p> : <p>&nbsp;</p>}
      {props.isAuthenticated && <div><Link className="link" to="/welcome">Success! Go to dashboard!</Link></div>}
      <button
        type="submit"
        className="login-and-sign-up-button login-button"
      >
        <img
          className="login-and-sign-up__img"
          src={loginButton}
        />
      </button>
    </form>
    <div className="link-container">
      <p>New to the hackathon?</p>
      <Link className="link" to="/signup">&nbsp;Sign Up</Link>
    </div>
  </div>
);

export default Login;

