import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api/expendiq',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000
});



export default httpClient;