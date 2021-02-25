import api from "./api"

const UserService = {
  getUsers: () => api.get('/users')
}

export default UserService

