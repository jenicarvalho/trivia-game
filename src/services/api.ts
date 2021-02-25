import axios from "axios"

const baseApiURL = "https://jsonplaceholder.typicode.com"

const api = axios.create({
  baseURL: baseApiURL
})

export default api
