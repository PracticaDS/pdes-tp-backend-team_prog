import UserController from '../controllers/UserController'
import CrudRouter from './CrudRouter'

class UserRouter extends CrudRouter {
  constructor(router, logger) {
    super(router, new UserController(), 'userId', logger)
  }
  routes() {
    const routes = super.routes()
    routes.push({ method: 'post', url: '/login', message: 'login' })
    return routes
  }
}

export default UserRouter
