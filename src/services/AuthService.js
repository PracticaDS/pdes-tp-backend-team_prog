
import User from '../schema/user/user'
import GenericService from './GenericService'

class AuthService extends GenericService {
  constructor() {
    super(User)
  }

  login = async ({ username }) => {
    try {
      let user = await this._model.findOne({ username }, { _id: true, username: true })
  
      if (!user) {
        user = await this._model.create({ username })
      }
      return user
    } catch (err) {
      new Error("User: error in login")
    }
  }
}

export default AuthService
