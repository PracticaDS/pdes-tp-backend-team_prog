import express from 'express'
import api from './routes/api'
import mongoose from 'mongoose'
import User from './schema/userSchema'

await mongoose.connect(
  // 'mongodb://localhost/myappdatabase'
)

const app = express()

const userExample = new User({
  name: 'user',
  username: 'juanito',
  password: 'password'
})

app.use('/api', api)
app.get('/', (req, res) => {
  res.status(200).send('hello')
})

export default app
