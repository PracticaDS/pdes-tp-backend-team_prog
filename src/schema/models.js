import mongoose from 'mongoose'
import User from './userSchema'

export const connectDb = () => mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/game')

const models = { User }

export default models