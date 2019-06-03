import mongoose from 'mongoose'
import User from './userSchema'
import NodeBlock  from './nodeSchema'

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/game'

export const connectDb = () => 
  mongoose.connect(DATABASE_URL, (err) => {
    console.log('An error has ocurred trying to connect to: ' + DATABASE_URL)
  })

const models = { User, NodeBlock }

export default models