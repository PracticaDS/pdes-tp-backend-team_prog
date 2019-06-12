
import mockingoose from 'mockingoose'
import express from 'express'
import bodyParser from 'body-parser'
import request from 'supertest'

import generateGrid from '../utils/gridGenerator'

import User from '../schema/user/user'
import Game from '../schema/game/game'
import userRoutes from '../routes/user'
import gameRoutes from '../routes/games'

describe('Routes for User', () => {
  const app = express()
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/user', userRoutes)
  app.use('/users/:userId/games', gameRoutes)

  it('POST /user/', async () => {
    const _user = (someUsername) => {
      return {
        username: someUsername,
        games: []
    }}

    mockingoose(User).toReturn(_user, 'create')

    const randomUsername = (Math.random() * 10000).toString()
    return request(app)
      .post('/user')
      .send({username: randomUsername})
      .expect(200)
      .then(response => {
        expect(response)
        expect(response.body)
        expect(response.body.res._id)
        expect(response.body.res.username).toEqual(randomUsername)
        expect(response.body.res.games).toEqual([])

        mockingoose.resetAll()
      })
  })

  it('GET /user/:userId', async () => {
    const id = '507f191e810c19729de860ea'
    const username = 'bla'
    const user = {
      id,
      username,
      games: []
    }

    mockingoose(User).toReturn(user, 'findOne')

    return request(app)
      .get(`/user/${id}`)
      .expect(200)
      .then(response => {
        expect(response)
        expect(response.body)
        expect(response.body.res.id).toEqual(id)
        expect(response.body.res.username).toEqual(username)
        expect(response.body.res.games).toEqual([])

        mockingoose.resetAll()
      })
  })

  it('PUT /user/', async () => {
    const id = '507f191e810c19729de860ea'
    const username = 'bla'
    const user = {
      id,
      username,
      games: []
    }

    mockingoose(User).toReturn(user, 'findOneAndUpdate')

    return request(app)
      .put('/user')
      .send(user)
      .expect(200)
      .then(response => {
        expect(response)
        expect(response.body)
        expect(response.body.res.id)
        expect(response.body.res.username).toEqual(username)
        expect(response.body.res.games).toEqual([])

        mockingoose.resetAll()
      })
  })

  it('DELETE /user/:userId', async () => {
    const id = '507f191e810c19729de860ea'
    const username = 'bla'
    const user = {
      id,
      username,
      games: []
    }

    mockingoose(User).toReturn(user, 'findOneAndRemove')

    return request(app)
      .delete(`/user/${id}`)
      .expect(200)
      .then(response => {
        expect(response)
        expect(response.body)
        expect(response.body.res.id).toEqual(id)
        expect(response.body.res.username).toEqual(username)
        expect(response.body.res.games).toEqual([])
      })
  })

  it('POST /users/:userId/games', async () => {
    const game = generateGrid('507f191e810c19729de860bb', 'Game 1', 5)
    const user = {
      _id: '507f191e810c19729de860ea',
      username: 'bla',
      games: []
    }

    mockingoose(User).toReturn(user, 'find')
    mockingoose(Game).toReturn(game, 'create')
    mockingoose(User).toReturn(user, 'update')

    return request(app)
      .post(`/users/${user._id}/games`)
      .send(game)
      .expect(200)
      .then(response => {
        expect(response)
        expect(response.body)
        expect(response.body.result._id).toEqual(game._id)
        expect(response.body.result.name).toEqual(game.name)

        mockingoose.resetAll()
      })
      .catch(err => {
        console.error(err)
      })
  })

  it('GET /users/:userId/games/:gameId', async () => {
    const game = generateGrid('507f191e810c19729de860bb', 'Game 1', 2)
    const user = {
      _id: '507f191e810c19729de860ea',
      username: 'bla',
      games: []
    }

    mockingoose(User).toReturn(user, 'find')
    mockingoose(Game).toReturn(game, 'findOne')

    return request(app)
      .get(`/users/${user._id}/games/${game._id}`)
      .send(game)
      .expect(200)
      .then(response => {
        expect(response)
        expect(response.body)
        expect(response.body.result._id).toEqual(game._id)
        expect(response.body.result.name).toEqual(game.name)

        mockingoose.resetAll()
      })
      .catch(err => {
        console.error(err)
      })
  })

  it('DELETE /users/:userId/games/:gameId', async () => {
    const game = generateGrid('507f191e810c19729de860bb', 'Game 1', 2)
    const user = {
      _id: '507f191e810c19729de860ea',
      username: 'bla',
      games: []
    }

    // mockingoose(User).toReturn(user, 'find')
    // mockingoose(Game).toReturn(game, 'find')
    // mockingoose(User).toReturn(user, 'update')
    mockingoose(Game).toReturn(undefined, 'deleteOne')

    return request(app)
      .delete(`/users/${user._id}/games/${game._id}`)
      .send(game)
      .expect(204)
      .then(response => {
        console.log(response.body)
        expect(response)
        expect( (response) => {
          if (!response.body.result) throw new Error('Should be undefined')
        }) 

        mockingoose.resetAll()
      })
      .catch(err => {
        console.error(err)
      })
  })
})
