import axios from "axios";

const BASE_URL = 'https://api.malltina.net/search/v2?q='


const request = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
  })
  


export default request