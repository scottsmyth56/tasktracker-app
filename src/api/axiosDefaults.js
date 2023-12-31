import axios from "axios"


axios.defaults.baseURL = "https://tasktrackerapi-320c209dd920.herokuapp.com/"
axios.defaults.headers.post["Content-Type"] = "application/json"
axios.defaults.withCredentials = true
const authToken = localStorage.getItem('authToken');

if (authToken) {
  axios.defaults.headers.common['Authorization'] = `Token ${authToken}`;

}




export const axiosRequest = axios.create()
export const axiosResponse = axios.create()

