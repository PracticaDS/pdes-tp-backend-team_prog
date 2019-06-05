import express from 'express'
import './schema/models'

const DEFAULT_PORT = process.env.PORT || 8080

const app = express()

app.get('/', (req, res) => {
  res.status(200).send('hello')
})

app.set('port', DEFAULT_PORT);

var server = app.listen(app.get('port'), function() {
  // console.log('Connection information: ' + JSON.stringify(connectionDB, undefined, 2))
  console.log('Express server listening on port ' + server.address().port);
});

export default app
