import { mapController } from './utils'

class GenericController {
  constructor(service, logger) {
    this.service = service
    this.logger = logger
  }

  async _resolve(promise, res) {
    mapController(promise)
      .then(({ status, result}) => {
        this.logger.info("resolve", result)
        res.status(status).send(result)
      })
  }
}

export default GenericController
