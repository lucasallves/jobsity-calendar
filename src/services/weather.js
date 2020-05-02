import axios from 'axios';

const KEY = '001f2418d5dbd7ef6975862c7a155fe9';

const api = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/weather'
});

const weather = {
  getweatherForCity(city) {
    const params = {
      q: city,
      APPID: KEY
    }

    return api.get('', { params });
  }
}

export default weather;