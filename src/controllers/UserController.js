import GenericController from './GenericController'
import AuthService from '../services/AuthService'

class UserController extends GenericController {
  constructor(logger){
    super(new AuthService(), logger)
  }
  parseGET = ({ params }) => params.userId

  login = (req, res) => {
    const body = this.parsePOST(req)
    const promise = this.service.login(body)
    this._resolve(promise, res)
  }
}

export default UserController
