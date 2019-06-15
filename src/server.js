import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import initRoutes from './routes'

import './schema/models'
import { initializeMonitoring } from './monitoring'

const DEFAULT_PORT = process.env.PORT || 8080
const MONITORING = process.env.MONITORING || false

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// routing init
initRoutes(app)

if (MONITORING) {
  initializeMonitoring(app)
}

app.set('port', DEFAULT_PORT);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port)
})

export default app
