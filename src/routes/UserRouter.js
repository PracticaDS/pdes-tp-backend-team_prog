import UserController from '../controllers/UserController'
import GenericRouter from './GenericRouter'

class UserRouter extends GenericRouter {
  constructor(router, logger) {
    super(router, 'userId', new UserController(), logger)
  }
  customRoutes = () => {
    return [
      { method: 'post', url: '/login', message: 'login' }
    ]
  }
}

export default UserRouter
