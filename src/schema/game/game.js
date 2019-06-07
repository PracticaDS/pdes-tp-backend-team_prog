import mongoose from 'mongoose'
import { Types } from '../constants'

const { Schema } = mongoose

const game = new Schema({
  id: String,
  factoryId: mongoose.Schema.Types.ObjectId,
  currency: Number,
  created_at: Date,
  updated_at: Date
})

export default mongoose.model(Types.Game, game)
