import axios from 'axios';
import config from '../constants/config';

const myApi = axios.create({
  baseURL: config.serverUri + '/file',
  timeout: 10000,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    crossDomain: true,
    'Access-Control-Allow-Origin': '*'
  }
});

export default myApi;
