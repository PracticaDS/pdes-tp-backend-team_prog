import mongoose, { Schema } from 'mongoose'
import { Types } from '../constants'

const nodeSchema = new Schema({
  id: Schema.Types.ObjectId,
  machine: { type: Schema.Types.ObjectId, ref: Types.Machine },
  materials: [{
    materialId: String,
    quantity: Number
  }],
  created_at: Date,
  updated_at: Date
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}})

export default mongoose.model(Types.Node, nodeSchema)