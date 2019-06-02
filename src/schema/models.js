import mongoose from 'mongoose'
import User from './userSchema'
import NodeBlock  from './nodeSchema'

export const connectDb = () => mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/game')

const models = { User, NodeBlock }

export default models