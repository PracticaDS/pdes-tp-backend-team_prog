import mongoose, { Schema } from 'mongoose'
import { Types } from '../constants'

const userSchema = new Schema({
  id: String,
  username: { type: String, required: true, unique: true },
  factories: [{  type: String, ref: Types.Factory }],
  created_at: Date,
  updated_at: Date
})

export default mongoose.model(Types.User, userSchema)