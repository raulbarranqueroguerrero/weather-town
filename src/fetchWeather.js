import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/onecall'
const API_Key = '83023b889782ddc46eb35ad98f8cc70d'

export const fetchWeather = async (lat, lon) => {
   const {data} = await axios.get(URL, {
      params: {
         lat: lat,
         lon: lon,
         units: 'metric',
         APPID: API_Key,

      }
   })
   console.log(data)
   return data
}
