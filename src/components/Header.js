import React from 'react';

const Header = (props) => (
  <header className="header">
    {props.currentUser ?
      <h1 className="App-title">Good day {props.currentUser}</h1>
      : 
      <h1 className="App-title">Hackathon</h1>
    }
  </header>
);

export default Header;