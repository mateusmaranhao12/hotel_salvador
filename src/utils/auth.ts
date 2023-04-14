import axios from 'axios'

export function usuarioAutenticado(): boolean {
  const token = localStorage.getItem('token')

  if (token) {
    // Define o token JWT como padrão para todas as requisições Axios
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    return true
  } else {
    return false
  }
}