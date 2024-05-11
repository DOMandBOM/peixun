import axios from 'axios'

axios.defaults.withCredentials = true
const request = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 10000
})

request.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

request.interceptors.response.use(res => {
  return res.data
}, error => {
  return Promise.reject(error)
})

export default request
