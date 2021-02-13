import axios from 'axios'

const API = 'http://localhost:3000/'

const instance = axios.create({
  baseURL: API
})

export default instance
