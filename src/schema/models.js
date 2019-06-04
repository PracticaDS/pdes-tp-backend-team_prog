import mongoose from 'mongoose'
import * as Models from './index'

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/game'

mongoose.connect(DATABASE_URL)

mongoose.connection.on('connected', () => {
  console.log('Connection established correctly')
})

mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected',function (err) {  
  console.log('Mongoose has been disconnected: ' + err);
});

export default mongoose.connection
