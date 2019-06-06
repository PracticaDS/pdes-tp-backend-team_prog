import User from '../schema/user/user'

export const createUser = (req, res) => {
  // Parse the request... here we need the body from the request
  const { body } = req

  // We decide what interaction with the database we want to do
  User.create(
    
    // Create the body for the operation... here is a create so, construct the User, this should be
    // in a differente type of file because it has nothing to do with how to parse the request
    {username: body.username,
    factories: []}
  
  )
  // When everything is OK, we send a successful response , with body, res: user_created
  .then(user_created => res.status(200).send({
    type: 'Success',
    res: user_created
  }))
  // When there is a problem, we send a Bad Request (just as an example) with body {type: error, body: err}
  .catch(err => res.status(400).send({
    type: 'Error',
    body: err
  }))
}

export const getUser = (req, res) => {
  // Parse the request... here we need the params... remember this responds to a GET /user/:user_id
  const { params } = req

  // We decide what interaction with the database we want to do
  User.findById(
    
    // Create the body for the operation... so the id is enough (We need to remember, the route definition)
    // In this case GET /user/:userId so, we search for userId
    params.userId
    
  )
  // When everything is OK, we send a successful response, with body, res: user
  .then(user => res.status(200).send({
    type: 'Success',
    res: user
  }))
  // When there is a problem, we send a Bad Request (just as an example) with body {type: error, body: err}
  .catch(err => res.status(400).send({
    type: 'Error',
    body: err
  }))
}

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