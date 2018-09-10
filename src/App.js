import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import logo from './logo.svg';
import './App.css';
import ReactRouter from './routers/AppRouter';

class App extends Component {
  constructor() {
    super();
    this.getWeather = this.getWeather.bind(this);
    this.state = {
      lat: '',
      long: ''
    }
  }

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
        lat: lat,
        long: long
      }));
    }, 5000);
  }

  componentDidUpdate() {
    console.log(this.state);
    this.getWeather();
  }

  getWeather() {
    let lat = this.state.lat;
    let long = this.state.long;
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=d0a10211ea3d36b0a6423a104782130e`)
      .then(response => response.json())
      .then(result => console.log(result));
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="App-title">Hackathon</h1>
        </header>
        <SignUp />
      </div>
    );
  }
}

export default App;
