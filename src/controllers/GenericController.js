import { mapController } from './utils'

class GenericController {
  constructor(service, logger) {
    this.service = service
    this.logger = logger
  }

  _resolve = async (promise, res) => {
    mapController(promise)
      .then(({ status, result}) => {
        this.logger.info("resolve", result)
        res.status(status).send(result)
      })
  }

  parseGET = ({ params: { id }}) => id

  get = (req, res) => {
    const parsedParams = this.parseGET(req)
    const promise = this.service.get(parsedParams)
    this._resolve(promise, res)
  }

  parseALL = () => ({})

  all = (req, res) => {
    const parsedParams = this.parseALL(req)
    const promise = this.service.all(parsedParams)
    this._resolve(promise, res)
  }

  parsePOST = ({ body }) => body

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

export default GenericController
