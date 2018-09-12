import React, { Component } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';

const users = {
  dave: {
    username: 'dave',
    password: 'pass'
  }
};

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
    this.resetUser = this.resetUser.bind(this);
    this.state = {
      passwordsDoNotMatch: false,
      incorrectLogin: false,
      isAuthenticated: false,
      currentUser: '',
      coordinates: {
        lat: '',
        long: ''
      },
      temperature: '',
      loaction: '',
      weather: '',    
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    };
  };

  componentDidMount() {
    let lat;
    let long;
    navigator.geolocation.getCurrentPosition((location) => {
      lat = location.coords.latitude;
      long = location.coords.longitude;
    });
    setTimeout(() => {
      this.setState(() => ({
        coordinates: {
          lat: lat,
          long: long
        }
      }));
      this.getWeather();
    }, 5000);
  }
  
  getWeather() {
    let lat = this.state.coordinates.lat;
    let long = this.state.coordinates.long;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=d0a10211ea3d36b0a6423a104782130e`)
      .then(response => response.json())
      .then(result => {
        let location = result.name;
        let temperature = result.main.temp;
        let weather = result.weather[0].main;
        this.setState(() => ({
          temperature,
          location,
          weather
        }));
      });
  };

  handleLogIn(e) {
    e.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    if (users[username] && users[username].password === password) {
      this.setState(() => ({
        isAuthenticated: true,
        incorrectLogin: false,
        currentUser: this.state.username
      }));
    } else {
      this.setState(() => ({
        incorrectLogin: true,
        isAuthenticated: false
      }));
    };
  }

  // Sets up a new user in a temp/mock database 'user'
  handleSignUp(e) {
    e.preventDefault();
    let password = this.state.password;
    let confirmPassword = this.state.confirmPassword;
    if (password !== confirmPassword) {
      this.setState(() => ({
        passwordsDoNotMatch: true,
        isAuthenticated: false,
      }));
    return;
    } else {
      let userName = this.state.username;
      users[userName] = {
        username: userName,
        email: this.state.email,
        password: this.state.password,
      };
      this.setState(() => ({
        isAuthenticated: true,
        currentUser: userName,
      }))
    }
    this.getWeather();
    this.resetUser();
  };

  resetUser() {
    this.setState(() => ({
      passwordsDoNotMatch: false,    
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    }));
  };

  handleUsername(e) {
    let username = e.target.value;
    this.setState(() => ({
      username: username
    }));
  };

  handleEmailChange(e) {
    let email = e.target.value;
    this.setState(() => ({  
      email: email
    }));
  };

  handlePassword(e) {
    let password = e.target.value;
    this.setState(() => ({
      password: password
    }));
  };

  handleConfirmPassword(e) {
    let confirmPassword = e.target.value;
    this.setState(() => ({
      confirmPassword: confirmPassword
    }));
  };

  render() {
    return (
    <HashRouter>
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route
            path="(/login|/)"
            exact
            render={() => <Login
              handleUsername={this.handleUsername}
              handlePassword={this.handlePassword}
              handleLogIn={this.handleLogIn} 
              incorrectLogin={this.state.incorrectLogin}
              isAuthenticated={this.state.isAuthenticated}
              currentUser={this.state.currentUser}
            />}
          />
          <Route
            path="/signup"
            exact
            render={() => <SignUp
              passwordsDoNotMatch={this.state.passwordsDoNotMatch}
              handleUsername={this.handleUsername}
              handleEmailChange={this.handleEmailChange}
              handleSignUp={this.handleSignUp}
              handlePassword={this.handlePassword}
              handleConfirmPassword={this.handleConfirmPassword}
              user={this.state}
              isAuthenticated={this.state.isAuthenticated}
              currentUser={this.state.currentUser}
            />}
          />
          {this.state.isAuthenticated && 
            <Route
              path="/welcome"
              exact
              render={() => <Dashboard
                currentUser={this.state.currentUser}  
                weather={this.state.weather}
                location={this.state.location}
                temperature={this.state.temperature}
              />}
            />
          }
        </Switch>
      </div>
    </HashRouter>
    );
  };
};

export default App;
