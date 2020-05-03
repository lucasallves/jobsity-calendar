import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/weather'
});

const weather = {
  getweatherForCity(city) {
    const params = {
      q: city,
      APPID: process.env.REACT_APP_WEATHER_KEY
    }

    return api.get('', { params });
  }
}

export default weather;
