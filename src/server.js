import express from 'express'
import api from './routes/api'
import models, { connectDb } from './schema/models'

const app = express()

app.use('/api', api)
app.get('/', (req, res) => {
  res.status(200).send('hello')
})

export default app
