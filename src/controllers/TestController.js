import GenericController from './GenericController'
import TestService from '../services/TestService'

// @TODO:
// - currently we can't override a parent class method
//   when it's defined as an arrow function
//   https://github.com/expressjs/express/issues/2963
// - the way to do that is binding that function manually
//   so, we can override it in a subclass and we can get
//   that function using bracks ['method']
//   eg: this.seed = this.seed.bind(this)
class TestController extends GenericController {
  constructor(logger) {
    super(new TestService(), logger)
  }

  seed = (req, res) => {
    const promise = this.service.seed()
    this._resolve(promise, res)
  }
  clean = (req, res) => {
    const promise = this.service.clean()
    this._resolve(promise, res)
  }
}

export default TestController
