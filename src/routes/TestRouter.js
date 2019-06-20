import GenericRouter from "./GenericRouter"
import TestController from "../controllers/TestController"

class TestRouter extends GenericRouter {
  constructor(router, logger) {
    super(router, new TestController(), logger)
  }

  routes() {
    const routes = super.routes()
    routes.push({ method: 'post', url: '/db-seed', message: 'seed' })
    routes.push({ method: 'post', url: '/db-clean', message: 'clean' })
    return routes
  }
}

export default TestRouter
