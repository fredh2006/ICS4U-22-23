import axios from 'axios'
 
const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/fredh2006/ICS4U-22-23',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
 
export default {
  getEvents() {
    return apiClient.get('/events')
  }
}