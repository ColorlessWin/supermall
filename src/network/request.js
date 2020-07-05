import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://152.136.185.210:8000/api/n3',
  timeout: 5000
})

axiosInstance.interceptors.response.use((result) => {
  return result.data
})

export default function (config) { return axiosInstance(config) }
