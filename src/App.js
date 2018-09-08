import React from 'react';


import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "fbd65baeac0d45157841efc6042bcac8";

class App extends React.Component {
  getWeather = async () => {
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid=${API_KEY}`);
    const data = await api_call.json();
    
  }
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather /> 
      </div>
    )  
  }
}

export default App;