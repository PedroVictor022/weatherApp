import React, { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(()=>{
    fetch('http://api.weatherapi.com/v1/current.json?key=1123c83fa623413086e13551222608&q=Sao Paulo&aqi=no')
      .then(res => res.json())
      .then(data => console.log(data))

  })

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
