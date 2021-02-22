import axios from 'axios'

const URL = 'http://api.openweathermap.org/data/2.5/weather'
const API_Key = '83023b889782ddc46eb35ad98f8cc70d'

export const fetchWeather = async (query) => {
   const {data} = await axios.get(URL, {
      params: {
         q: query,
         units: 'metric',
         APPID: API_Key,

      }
   })
   return data
}
