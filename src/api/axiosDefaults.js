import axios from "axios"


axios.defaults.baseURL = "http://127.0.0.1:8000/"
axios.defaults.headers.post["Content-Type"] = "application/json"
axios.defaults.withCredentials = true
const authToken = localStorage.getItem('authToken');

if (authToken) {
  axios.defaults.headers.common['Authorization'] = `Token ${authToken}`;

}




export const axiosRequest = axios.create()
export const axiosResponse = axios.create()

