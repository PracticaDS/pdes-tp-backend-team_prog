import mongoose from 'mongoose'
import { Types } from '../constants'

const { Schema } = mongoose

const factory = new Schema({
  id: String,
  dimensions: { n: Number, m: Number },
  nodes: [[{  type: mongoose.Schema.Types.ObjectId, ref: Types.Node }]],
  created_at: Date,
  updated_at: Date
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}})

export default mongoose.model(Types.Factory, factory)
