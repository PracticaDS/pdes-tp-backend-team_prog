import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', greeting: 'hello' })
})

export default app