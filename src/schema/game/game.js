import mongoose from 'mongoose'
import { Types } from '../constants'

const { Schema } = mongoose

const game = new Schema({
  id: Schema.Types.ObjectId,
  factory: { type: Schema.Types.ObjectId, ref: Types.Factory },
  currency: Number,
  created_at: Date,
  updated_at: Date
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}})

export default mongoose.model(Types.Game, game)
