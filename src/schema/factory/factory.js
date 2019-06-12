import mongoose, { Schema } from 'mongoose'
import { Types } from '../constants'

const factory = new Schema({
  id: Schema.Types.ObjectId,
  dimensions: { n: Number, m: Number },
  nodes: [[{  type: Schema.Types.ObjectId, ref: Types.Node }]],
  created_at: Date,
  updated_at: Date
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}})

export default mongoose.model(Types.Factory, factory)
