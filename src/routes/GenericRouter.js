import Logger from '../utils/Logger'

class GenericRouter {
  constructor(router, paramId, controller, logger = new Logger()) {
    this.controller = controller
    this.controller.logger = logger // @TODO: find a better way
    this.paramId = `:${paramId}`
    this.router = router
  }

  commonRoutes = () => {
    return [
      { method: 'post', url: '/', message: 'create' },
      { method: 'put', url: `/${this.paramId}`, message: 'update' },
      { method: 'get', url: '/', message: 'all' },
      { method: 'get', url: `/${this.paramId}`, message: 'get' },
      { method: 'delete', url: `/${this.paramId}`, message: 'delete' },
    ]
  }

  customRoutes = () => {
    return []
  }

  getController = () => (this.controller)

  generateRoutes = () => {
    const routes = this.commonRoutes().concat(this.customRoutes())

    routes.forEach(({ method, url, message }) => {
      this.router[method](url, this.controller[message])
    })
  }

  getRoutes = () => {
    this.generateRoutes()
    return this.router
  }
}

export default GenericRouter
