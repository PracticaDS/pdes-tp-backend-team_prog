import mongoose from 'mongoose'
import { Types } from '../constants'

const { Schema } = mongoose

const nodeSchema = new Schema({
  id: String,
  machine: { type: Schema.ObjectId, ref: Types.Machine },
  materials: [{
    materielId: String,
    quantity: Number
  }],
  created_at: Date,
  updated_at: Date
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}})

export default mongoose.model(Types.Node, nodeSchema)