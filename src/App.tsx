import { useState } from 'react';
import { weatherApiRes } from './API/WeatherAPI';
import { WeatherType } from './API/WeatherTypes';
import { Container, WeatherApp, WeatherInfos, WeatherInput } from './Styles/UI';

function App() {
  const [weather, setWeather] = useState({} as WeatherType);
  const [city, setCity] = useState("");
  const [sucess, setSucess] = useState<boolean>();

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
          <p 
            className='location-name'>{weather.location.name}
          </p>
          <p 
            className='location-region'>{weather.location.region} - {weather.location.country}
          </p>
          <p 
            className='current-temp'>{weather.current.temp_c} °C
          </p>
          <p 
            className='hour'>Hour: {weather.location.localtime.slice(11,16)} -- {weather.current.condition.text}
          </p>
          
        </WeatherInfos>
        :
        <WeatherInfos style={{ display: 'none' }} />
        }
      </WeatherApp>
    </Container>
  );
}

export default App;
