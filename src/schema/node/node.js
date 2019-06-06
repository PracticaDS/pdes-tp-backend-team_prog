import mongoose from 'mongoose'

const { Schema } = mongoose

const nodeSchema = new Schema({

  machineId: String,
  materials: [{
    materielId: String,
    quantity: Number
  }],
})

const NodeBlock = mongoose.model('Node', nodeSchema)

export default NodeBlock