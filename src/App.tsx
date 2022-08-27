import { Box, Container, Input, InputGroup, InputLeftAddon, InputRightAddon, Modal, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { weatherApiRes } from './API/WeatherAPI';
import { WeatherType } from './API/WeatherTypes';

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
    // <Box>

    //     <form
    //       onSubmit={handleSubmit}
    //     >
    //       <input
    //         type="text"
    //         name="city"
    //         value={city}
    //         onChange={e => setCity(e.target.value)}
    //       />
    //       <button
    //         type='submit'
    //       >Pesquisar</button>
    //     </form>

    //     <div className="weather-render">

    //       {
    //         sucess ?
    //           (
    //             <div className="weather-container-infos">
    //               <Text>{weather.location.name}</Text>
    //               <Text>{weather.location.region} - {weather.location.country}</Text>
    //               <Text>{weather.current.temp_c} °C</Text>
    //             </div>
    //           ) :
    //           (
    //             <div>

    //             </div>
    //           )
    //       }
    //     </div>
    // </Box>
    <Container
      size="sm"
      maxW="700"
      minH="400"
      bg="gray.500"
      color="whiteAlpha.800"
      centerContent
      flexDirection="column"
      alignItems="flex-start"
    >
      <InputGroup>
        <Input 
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder='Search City'
          fontSize="xs"
          htmlSize={40}
          width="auto"
          variant="filled"
          color="tomato"
          focusBorderColor="whiteAlpha.600"
          isInvalid={sucess}
        />
        <InputRightAddon
          children="Pesquisar"
          bg="tomato"
        />
      </InputGroup>
    </Container>
  );
}

export default App;
