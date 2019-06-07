
import User from '../schema/user/user'

class AuthService {
  async login({ username }) {
    try {
      let user = await User.findOne({ username })
  
      if (!user) {
        user = await User.create({ username, factories: [] })
      }
      return user
    } catch (err) {
      new Error("User: error in login")
    }
  }
}

const singletonAuthService = new AuthService()

export default singletonAuthService
