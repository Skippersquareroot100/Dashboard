import axios from 'axios'

// Create Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
})

// Attach token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default api
