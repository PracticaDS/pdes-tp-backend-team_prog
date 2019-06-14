
class GenericService {
  constructor(model) {
    this._model = model
  }

  get = id => {
    return this._model.findById(id)
  }

  all = () => {
    return this._model.find({})
  }

  create = body => {
    return this._model.create(body)
  }

  update = (id, body) => {
    return this._model.findByIdAndUpdate(id, body)
  }

  delete = id => {
    return this._model.findByIdAndRemove(id)
  }
}

export default GenericService
