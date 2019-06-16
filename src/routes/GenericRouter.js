import Logger from '../utils/Logger'

class GenericRouter {
  constructor(router, controller, logger = new Logger()) {
    this._router = router
    this.controller = controller
    this.controller.logger = logger // @TODO: find a better way
  }

  routes() {
    return []
  }

  controller() {
    return this.controller
  }

  // @TODO:
  //  - we don't need to bind fn to the router context because
  //  - all our controller functions are defined as arrow function
  //  - otherwise we can do: fn.bind(this)
  generateRoutes() {
    const routes = this.routes()
    routes.forEach(({ method, url, message }) => {
      const fn = this.controller[message]
      if (fn) {
        this._router[method](url, fn)
      }
    })
  }

  router() {
    this.generateRoutes()
    return this._router
  }
}

export default GenericRouter
