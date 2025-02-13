//deprectated module
import axios from "axios"

const loginBaseURL = `/api/login`

const login = async (username: string, password: string) => {
  const res = await axios.post(`${loginBaseURL}`, {username, password})
  return res.data
}

export default {
  login
}