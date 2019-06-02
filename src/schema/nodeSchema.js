import mongoose from 'mongoose'

const { Schema } = mongoose

const nodeSchema = new Schema({

  machineId: String,
  materials: [{
    materielId: String,
    quantity: Number
  }],
})

export default mongoose.model('Node', nodeSchema)