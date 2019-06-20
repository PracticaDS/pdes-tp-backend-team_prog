import GenericController from './GenericController'

class CrudController extends GenericController {
  constructor(service, logger) {
    super(service, logger)
  }

  parseGET({ params: { id }}) {
    return id
  }
  get = (req, res) => {
    const parsedParams = this.parseGET(req)
    const promise = this.service.get(parsedParams)
    this._resolve(promise, res)
  }

  parseALL() {
    return {}
  }

  all = (req, res) => {
    const parsedParams = this.parseALL(req)
    const promise = this.service.all(parsedParams)
    this._resolve(promise, res)
  }

  parsePOST({ body }) {
    return body
  }

  create = (req, res) => {
    const parsedBody = this.parsePOST(req)
    const promise = this.service.create(parsedBody)
    this._resolve(promise, res)
  }

  update = (req, res) => {
    const parsedParams = this.parseGET(req)
    const parsedBody = this.parsePOST(req)
    const promise = this.service.update(parsedParams, parsedBody)
    this._resolve(promise, res)
  }

  delete = (req, res) => {
    const { params: { id } } = req
    const parsedParams = this.parseGET(req)
    const promise = this.service.delete(parsedParams)
    this._resolve(promise, res)
  }
}

export default CrudController
