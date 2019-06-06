import User from '../schema/userSchema'
import connection from '../schema/models'

 export const createUser = (req, res) => connection.then(() => {
  const { username } = req.params
  new User({  username,  factories: []}).save().then(user => { res.send(user) })
}).catch(() => {})

 export const getUser = (req, res) => connection.then(() => {
  const { id } = req.params
  User.findById(id).then(user => {
    res.send(user)
  })
}).catch(() => {})

 export const updateUser = (req, res) => connection.then(() => {
  const { id, username, factories } = req.params
  User.findByIdAndUpdate(id, { username, factories }).then(user => {
    res.send(user)
  })
}).catch(err => {})

 export const deleteUser = (req, res) => connection.then(() => {
  const { id } = req.params
  User.findByIdAndRemove(id).then(note => {
      res.send({message: "Note deleted successfully!"})
  })
}).catch(err => {})