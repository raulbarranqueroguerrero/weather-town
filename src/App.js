import React, {useState} from 'react'
import {fetchWeather} from './fetchWeather'
import 'remixicon/fonts/remixicon.css'
import './App.css'

function App() {
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const [meteo, setMeteo] = useState({})
  console.log(meteo)
  
  const search = async(e) => {
      const data = await fetchWeather(lat, lon)
      setMeteo(data)
      setLat('')
      setLon('')
  }
  
  return (
    <div className="main-container">
      <div className="inputs">
        <input type="text" className="search" placeholder="Enter latitude..." value={lat} onChange={(e) => setLat(e.target.value)} />
        <input type="text" className="search" placeholder="Enter longitude..." value={lon} onChange={(e) => setLon(e.target.value)} />
        <button onClick={search} className="search">Search</button>
      </div>
      {meteo.current && (
        <div className="city">
          <h2 className="city-name">
          <span>{meteo.lat}</span>
          <span>{meteo.lon}</span>
          </h2>
          <div className="city-temp">
              {Math.round(meteo.current.temp)}
              <sup>&deg;C</sup>
          </div>
          <div className="info">
        </div>
        </div>
      )}
    </div>
  )
}

export default App;
