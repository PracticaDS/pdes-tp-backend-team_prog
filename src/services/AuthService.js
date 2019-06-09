
import User from '../schema/user/user'

class AuthService {
  async login({ username }) {
    try {
      let user = await User.findOne({ username }).populate('games')
  
      if (!user) {
        user = await User.create({ username })
      }
      return user
    } catch (err) {
      new Error("User: error in login")
    }
  }
}

const singletonAuthService = new AuthService()

export default singletonAuthService
