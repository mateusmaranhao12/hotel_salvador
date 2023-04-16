import axios from 'axios'
export function usuarioAutenticado(): boolean {
  const token = localStorage.getItem('token')

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return true
  } else {
    return false
  }
}