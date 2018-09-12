import React from 'react';
import clouds from '../assests/Clouds_icon.png';
import sun from '../assests/Sun_icon.png';
import rain from '../assests/Rain_icon.png';

const Dashboard = (props) => (
  <div>
    <div className="dashboard">
      <div className="dashboard-bricks">
        <p>Weather</p>
        <div>{props.temperature} degrees</div>
        {props.weather === 'Rain' ?
          <img src={rain}/>
        :
          props.weather === 'Clouds' ?
          <img src={clouds}/>
          :
          <img src={sun}/>
        }
        <div>{props.location}</div>
      </div>
      <div className="dashboard-bricks">
        <p>News</p>
      </div>
      <div className="dashboard-bricks">
        <p>Sport</p>
      </div>
      <div className="dashboard-bricks">
        <p>Photos</p>
      </div>
      <div className="dashboard-bricks">
        <p>Tasks</p>
      </div>
      <div className="dashboard-bricks">
        <p>Clothes</p>
      </div>
    </div>
  </div>
);

export default Dashboard;
