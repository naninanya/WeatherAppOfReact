import { useState } from "react";
import Form from './components/Form'
import Tilte from './components/Title';
import './App.css';
import Results from './components/Results';
import apikey from './private/apikey.json';

function App() {
  const [city, setCity] = useState<string>("");
  const getWeather = (e: any) => {
      e.preventDefault();
      fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey.weatherkey}&q=London&aqi=no`)
          .then(res => res.json())
          .then(data => console.log(data))
  }

  return (
    <div className="App">
      <Tilte />
      <Form setCity={setCity} getWeather={getWeather}/>
      <Results />
    </div>
  );
}

export default App;
