import mongoose, { Schema } from 'mongoose'
import { Types } from '../constants'

const game = new Schema({
  id: Schema.Types.ObjectId,
  factory: {
    dimensions: { n: Number, m: Number },
    gridValues: [[{
      _id: false,
      position: {
        row: Number,
        column: Number
      },
      machine: {
        type: {
          name: String,
          price: Number,
          machineType: String,
          direction: String,
          frequency: Number,
          metadata: Schema.Types.Mixed,
        }
      },
      items: {
        type: Schema.Types.Mixed,
        default: {}
      }
    }]]
  },
  currency: Number,
  created_at: Date,
  updated_at: Date
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}, minimize: false })

export default mongoose.model(Types.Game, game)
