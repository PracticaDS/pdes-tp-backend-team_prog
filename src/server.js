import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import userRoutes from './routes/user'
import gameRoutes from './routes/games'

import './schema/models'
import { requestCounters } from './monitoring'
import { responseCounters } from './monitoring'
import { injectMetricsRoute } from './monitoring'
import { startCollection } from './monitoring'

const DEFAULT_PORT = process.env.PORT || 8080

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/user', userRoutes)
app.use('/users/:userId/games', gameRoutes)

app.get('/', (req, res) => {
  res.status(200).send('hello')
})

app.use(requestCounters)
app.use(responseCounters)

injectMetricsRoute(app)

startCollection()

app.set('port', DEFAULT_PORT);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port)
})

export default app
