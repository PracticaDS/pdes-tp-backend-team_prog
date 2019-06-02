import express from 'express'
import models, { connectDb } from './schema/models'

import nodeRoutes from './routes/node'

const DEFAULT_PORT = process.env.PORT || 8080

const app = express()

app.use('/node', nodeRoutes);

app.get('/', (req, res) => {
  res.status(200).send('hello')
})

app.set('port', DEFAULT_PORT);
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

export default app
