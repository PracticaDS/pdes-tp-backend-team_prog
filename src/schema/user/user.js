import mongoose, { Schema } from 'mongoose'
import { Types } from '../constants'

const userSchema = new Schema({
  id: String,
  username: { type: String, required: true, unique: true },
  games: [{  type: mongoose.Schema.Types.ObjectId, ref: Types.Game }],
  created_at: Date,
  updated_at: Date
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}})

export default mongoose.model(Types.User, userSchema)