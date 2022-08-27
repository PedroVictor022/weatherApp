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

    if (city.trim()) {
      try {
        const data = await weatherApiRes(city);
        setWeather(data);
        setCity("");
        setSucess(true);
        console.log(`Pesquisa concluida com sucesso!`)
      } catch (err) {
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

          {
            sucess ?
              (
                <div className="weather-container-infos">
                  <h1>{weather.location.name}</h1>
                  <h2>{weather.location.region} - {weather.location.country}</h2>
                  <h1>{weather.current.temp_c} °C</h1>
                </div>
              ) :
              (
                <div>

                </div>
              )
          }
        </div>

      </header>
    </div>
  );
}

export default App;
