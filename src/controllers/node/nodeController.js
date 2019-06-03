import NodeBlock from '../schema/nodeSchema'

//Simple version, without validation or sanitation
exports.findAll = (req, res) => {
  const message = 'From Node get All'
  console.log(message)
  res.send(message)
}

exports.create = (req, res) => {
  const message = 'From Node create'
  console.log(message)
  res.send(message)
};

exports.get = (req, res) => {
  const message = 'From Node get'
  console.log(message)
  res.send(message)
};

exports.update = (req, res) => {
  const message = 'From Node update'
  console.log(message)
  res.send(message)
};

exports.delete = (req, res) => {
  const message = 'From Node delete'
  console.log(message)
  res.send(message)
};