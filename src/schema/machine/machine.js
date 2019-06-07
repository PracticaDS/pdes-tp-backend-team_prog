import mongoose from 'mongoose'
import { Types } from '../constants'

const { Schema } = mongoose

const machine = new Schema({
  id: Schema.Types.ObjectId,
  machineType: String,
  metadata: Object,
  created_at: Date,
  updated_at: Date
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}})

export default mongoose.model(Types.Machine, machine)