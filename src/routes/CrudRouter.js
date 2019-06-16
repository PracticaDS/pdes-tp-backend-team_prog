import GenericRouter from "./GenericRouter"

class CrudRouter extends GenericRouter {
  constructor(router, controller, paramId, logger) {
    super(router, controller, logger)
    this.paramId = `:${paramId}`
  }
  routes() {
    return [
      { method: 'post', url: '/', message: 'create' },
      { method: 'put', url: `/${this.paramId}`, message: 'update' },
      { method: 'get', url: '/', message: 'all' },
      { method: 'get', url: `/${this.paramId}`, message: 'get' },
      { method: 'delete', url: `/${this.paramId}`, message: 'delete' },
    ]
  }
}

export default CrudRouter
