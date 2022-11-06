import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';

import Cards from './components/Cards';
import About from './components/About'
import Nav from './components/Nav';
/* import Style from './components/nav.module.css' */
/* import data from './data.js'; */

function App() {

  const [cities, setCities] = useState([])

  const apiKey = '4ae2636d8dfbdc3044bede63951a019b'

  function onClose(id) {
    setCities( (oldCities)  => oldCities.filter( (c )=> c.id  !== id));
  }

  function onSearch (ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        console.log(recurso)
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  return (
    <div className="App">
      
      <Nav onSearch={onSearch}  />
      
      <Routes>
        <Route 
          path='/' 
          element={<Cards cities={cities} onClose={onClose} />} 
          />

          <Route path='/about'  element={<About />}  />

      </Routes>
    </div>
  );
}

export default App;
/* <Cards  cities={cities} onClose={onClose}  />
      /> */