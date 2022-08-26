import React, { useEffect, useState } from 'react';
import { WeatherType } from './API/WeatherTypes';
import './App.css';

function App() {
  const [weather, setWeather] = useState({} as WeatherType);
  const [city, setCity] = useState<string>();
  const [sucess, setSucess] = useState<boolean>(false);

  return (
    <div className="App">
      <header className="App-header">

        <form 
          action=""

        >
          <input type="text" />
          <button>Pesquisar</button>
        </form>

      </header>
    </div>
  );
}

export default App;
