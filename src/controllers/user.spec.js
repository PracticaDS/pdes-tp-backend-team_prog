
import mockingoose from 'mockingoose'
import express from 'express'
import bodyParser from 'body-parser'
import request from 'supertest'

import User from '../schema/user/user'
import userRoutes from '../routes/user'

describe('Routes for User', () => {
  const app = express()
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/user', userRoutes)

  it('POST /user/', async () => {
    const _user = (someUsername) => {
      return {
        username: someUsername,
        factories: []
    }}

    // We mock mongo here
    mockingoose(User).toReturn(_user, 'create')

    const randomUsername = (Math.random() * 10000).toString()
    return request(app)
      .post('/user')
      .send({username: randomUsername})
      .expect(200)
      .then(response => {
        expect(response)
        expect(response.body)

        //Here only expect that `_id` field exists, since mockingoose sets a value and i cant find a way to control it
        expect(response.body.res._id)
        expect(response.body.res.username).toEqual(randomUsername)
        expect(response.body.res.factories).toEqual([])
      })
  })

  it('GET /user/:userId', async () => {
    const id = 1
    const username = 'bla'
    const user = {
      id,
      username,
      factories: []
    }

    mockingoose(User).toReturn(user, 'findById')

    return request(app)
      .get(`/user/${id}`)
      .expect(200)
      .then(response => {
        expect(response)
        expect(response.body)
        expect(response.body.res._id).toEqual(id)
        expect(response.body.res.username).toEqual(username)
        expect(response.body.res.factories).toEqual([])
      })
  })
})
