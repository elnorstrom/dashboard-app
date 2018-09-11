import React, { Component } from 'react';
import Header from './Header';
import Login from './Login';
import SignUp from './SignUp';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

let users = {}

class App extends Component {
  constructor(props) {
    super(props);
    this.getWeather = this.getWeather.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.state = {
      passwordsDoNotMatch: false,
      userIsLoggedIn: false,
      coordinates: {
        lat: '',
        long: ''
      },    
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      user: []
    };
  };

  componentDidMount() {
    let lat;
    let long;
    navigator.geolocation.getCurrentPosition((location) => {
      lat = location.coords.latitude;
      long = location.coords.longitude;
      console.log(location);
      console.log(lat, long);
    });
    setTimeout(() => {
      this.setState(() => ({
        coordinates: {
          lat: lat,
          long: long
        }
      }));
    }, 5000);
  }

  componentDidUpdate() {
    console.log(this.state);
    this.getWeather();
  }

  getWeather() {
    let lat = this.state.coordinates.lat;
    let long = this.state.coordinates.long;
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=d0a10211ea3d36b0a6423a104782130e`)
      .then(response => response.json())
      .then(result => console.log(result));
  };

  handleSignUp(e) {
    e.preventDefault();
    console.log('Sign up submitted!');
    let password = this.state.password;
    let confirmPassword = this.state.confirmPassword;
    let newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    if (password !== confirmPassword) {
      this.setState(() => ({
        passwordsDoNotMatch: true
      }));
    } else {
      this.setState((prevState) => ({
        passwordsDoNotMatch: false,
        user: prevState.user.concat(newUser)
      }));
    };
    if (this.state.user.length > 0) {
      let userName = this.state.user[0].username;
      let email = this.state.user[0].password;
      let password = this.state.user[0].email;
      users[userName] = {
        username: userName,
        email: email,
        password: password
      };
      console.log(users);
    }
    console.log('Sign up completed!');
    console.log(this.state.user);
  };

  handleUsername(e) {
    let username = e.target.value;
    this.setState(() => ({
      username: username
    }));
    console.log(this.state.signUp);
  }

  handleEmailChange(e) {
    let email = e.target.value;
    this.setState(() => ({  
      email: email
    }));
    console.log(this.state.signUp);
  }

  handlePassword(e) {
    let password = e.target.value;
    this.setState(() => ({
      password: password
    }));
    console.log(this.state.signUp);
  }

  handleConfirmPassword(e) {
    let confirmPassword = e.target.value;
    this.setState(() => ({
      confirmPassword: confirmPassword
    }));
    console.log(this.state.signUp);
  }

  handleLogIn(e) {
    e.preventDefault();
    console.log('logged in!');
    this.setState(() => ({
      userIsLoggedIn: true
    }));
  };

  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route
            path='(/login|/)'
            exact
            render={() => <Login
              handleLogIn={this.handleLogIn}  
            />}
          />
          <Route
            path='/signup'
            exact
            render={() => <SignUp
              passwordsDoNotMatch={this.state.passwordsDoNotMatch}
              handleUsername={this.handleUsername}
              handleEmailChange={this.handleEmailChange}
              handleSignUp={this.handleSignUp}
              handlePassword={this.handlePassword}
              handleConfirmPassword={this.handleConfirmPassword}
              user={this.state}
            />}
          />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;

