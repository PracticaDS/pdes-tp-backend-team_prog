import mongoose from 'mongoose'
import { Types } from '../constants'

const { Schema } = mongoose

const nodeSchema = new Schema({
  id: String,
  machineId: String,
  materials: [{
    materielId: String,
    quantity: Number
  }],
  created_at: Date,
  updated_at: Date
})

const NodeBlock = mongoose.model(Types.Node, nodeSchema)

export default NodeBlock