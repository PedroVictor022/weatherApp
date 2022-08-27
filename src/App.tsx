import React, { useEffect, useState } from 'react';
import { weatherApiRes } from './API/WeatherAPI';
import { WeatherType } from './API/WeatherTypes';
import './App.css';

function App() {
  const [weather, setWeather] = useState({} as WeatherType);
  const [city, setCity] = useState("");
  const [sucess, setSucess] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if(city.trim()) {
      try {
        const data = await weatherApiRes(city);
        setWeather(data);
        setCity("");
        setSucess(true);
        console.log(`Pesquisa concluida com sucesso!`)
      } catch(err) {
        alert("Cidade nao encontrada!");
        setSucess(false);
      }
    }

  }

  return (
    <div className="App">
      <header className="App-header">

        <form 
          onSubmit={handleSubmit}
        >
          <input 
            type="text" 
            name="city"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <button
            type='submit'
          >Pesquisar</button>
        </form>

        <div className="weather-render">
          <p>City {weather.location.name}</p>
          <p>{weather.location.region} - {weather.location.country}</p>
        </div>

      </header>
    </div>
  );
}

export default App;
