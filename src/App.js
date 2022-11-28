import React from 'react';
//import axios from 'axios';

function App() {
 // const url='https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=e17191b88dddbaf6fb8bb278be0f0994'
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>60 F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className='bold'>65 F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className='bold'>20%</p>
            <p>Humidity </p>
          </div>
          <div className="wind">
            <p className='bold'>15 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>              
  );
}

export default App;
