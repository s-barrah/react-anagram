import axios from 'axios';
const baseUrl = window.location.protocol + '//' + window.location.host + '/';
const instance = axios.create({
  baseURL: baseUrl
});

export default instance;
