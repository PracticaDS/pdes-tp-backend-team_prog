import AuthService from '../services/AuthService'
import CrudController from './CrudController'

class UserController extends CrudController {
  constructor(logger){
    super(new AuthService(), logger)
  }
  parseGET({ params }) {
    return params.userId
  }

  login = (req, res) => {
    const body = this.parsePOST(req)
    const promise = this.service.login(body)
    this._resolve(promise, res)
  }
}

export default UserController
