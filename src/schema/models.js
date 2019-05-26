import mongoose from 'mongoose'
import User from './userSchema'

const connectDb = () => mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/game')

const userExample = new User({
  name: 'user',
  username: 'juanito',
  password: 'password'
})