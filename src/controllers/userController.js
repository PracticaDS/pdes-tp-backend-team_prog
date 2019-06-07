import User from '../schema/user/user'
import AuthService from '../services/AuthService'

const successResponse = result => ({
  type: 'Success',
  result,
})

const errorResponse = result => ({
  type: 'Error',
  result,
})

export const createUser = (req, res) => {
  const { body: { username } } = req

  User.create({ 
    username: username,
    factories: []
  })
  .then(user => res.status(200).send({
    type: 'Success',
    res: user
  }))
  .catch(err => res.status(400).send({
    type: 'Error',
    body: err
  }))
}

export const getUser = (req, res) => {
  const { params: { userId }} = req
  User.findById(userId)
  .then(user => res.status(200).send({
    type: 'Success',
    res: user
  }))
  .catch(err => res.status(400).send({
    type: 'Error',
    body: err
  }))
}

export const updateUser = (req, res) => {
  const { body: { id, username, factories } } = req
  User.findByIdAndUpdate(id, { username, factories })
  .then(user => res.status(200).send({
    type: 'Success',
    res: user
  }))
  .catch(err => res.status(400).send({
    type: 'Error',
    body: err
  }))
}

export const deleteUser = (req, res) => {
  const { params: { userId }} = req
  User.findByIdAndRemove(userId)
  .then(user => res.status(200).send({
    type: 'Success',
    res: user
  }))
  .catch(err => res.status(400).send({
    type: 'Error',
    body: err
  }))
}

export const login = (req, res) => {
  const userDTO = req.body
  AuthService.login(userDTO)
    .then(user => res.status(200).send(successResponse(user)))
    .catch(error => res.status(400).send(errorResponse(error)))
}
