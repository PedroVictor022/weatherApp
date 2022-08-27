import { useState } from 'react';
import { weatherApiRes } from './API/WeatherAPI';
import { WeatherType } from './API/WeatherTypes';
import { Container, WeatherApp, WeatherInfos, WeatherInput } from './Styles/UI';

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
    <Container>
      <WeatherApp>
        <WeatherInput
          onSubmit={handleSubmit}
        >
          <input 
            type="text" 
            placeholder='Search a city...'
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <button type='submit'>Search</button>
        </WeatherInput>
        {
          sucess?
          <WeatherInfos >  
          <h1>{weather.location.name}</h1>
          <h2>{weather.location.region} - {weather.location.country}</h2>
          <p>{weather.current.temp_c} °C</p>
          <p>Hora: {weather.location.localtime.slice(11,16)}</p>
        </WeatherInfos>
        :
        <WeatherInfos style={{ display: 'none' }} />
        }
      </WeatherApp>
    </Container>
  );
}

export default App;
