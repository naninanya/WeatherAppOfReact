import React, { useState } from "react";
import Form from './components/Form'
import Tilte from './components/Title';
import './App.css';
import Results from './components/Results';
import apikey from './private/apikey.json';

type ResultsStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
}

function App() {
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",
  });

  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey.weatherkey}&q=${city}&aqi=no`)
      .then(res => res.json())
      .then(data => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        })
        setCity("");
      })
      .catch(err => alert("Error occurred!"))
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Tilte />
        <Form setCity={setCity} getWeather={getWeather} city={city} />
        <Results results={results} />
      </div>
    </div>
  );
}

export default App;
