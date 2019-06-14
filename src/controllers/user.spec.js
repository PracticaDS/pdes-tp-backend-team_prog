
import mockingoose from 'mockingoose'
import express, { Router } from 'express'
import bodyParser from 'body-parser'
import request from 'supertest'

import { generateGameMock } from '../utils/gridGenerator'

import User from '../schema/user/user'
import Game from '../schema/game/game'
import UserRouter from '../routes/UserRouter'
import GameRouter from '../routes/GameRouter'

import CustomLogger from '../utils/CustomLogger'

describe('Routes for User', () => {
  const app = express()
  const userRouter = new UserRouter(Router(), new CustomLogger())
  const gameRouter = new GameRouter(Router({mergeParams: true}), new CustomLogger())

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/users', userRouter.getRoutes())
  app.use('/users/:userId/games', gameRouter.getRoutes())

  it('POST /users/', async () => {
    const _user = (someUsername) => {
      return {
        username: someUsername,
        games: []
    }}

    mockingoose(User).toReturn(_user, 'create')

    const randomUsername = (Math.random() * 10000).toString()
    return request(app)
      .post('/users')
      .send({username: randomUsername})
      .expect(200)
      .then(response => {
        expect(response)
        expect(response.body)
        expect(response.body._id)
        expect(response.body.username).toEqual(randomUsername)
        expect(response.body.games).toEqual([])

        mockingoose.resetAll()
      })
  })

  it('GET /users/:userId', async () => {
    const id = '507f191e810c19729de860ea'
    const username = 'bla'
    const user = {
      id,
      username,
      games: []
    }

    mockingoose(User).toReturn(user, 'findOne')

    return request(app)
      .get(`/users/${id}`)
      .expect(200)
      .then(response => {
        expect(response)
        expect(response.body)
        expect(response.body.id).toEqual(id)
        expect(response.body.username).toEqual(username)
        expect(response.body.games).toEqual([])

        mockingoose.resetAll()
      })
  })

  it('PUT /users/:userId', async () => {
    const id = '507f191e810c19729de860ea'
    const username = 'bla'
    const user = {
      id,
      username,
      games: []
    }

    mockingoose(User).toReturn(user, 'findOneAndUpdate')

    return request(app)
      .put(`/users/${id}`)
      .send(user)
      .expect(200)
      .then(response => {
        expect(response.body)
        expect(response.body.id)
        expect(response.body.username).toEqual(username)
        expect(response.body.games).toEqual([])

        mockingoose.resetAll()
      })
  })

  it('DELETE /users/:userId', async () => {
    const id = '507f191e810c19729de860ea'
    const username = 'bla'
    const user = {
      id,
      username,
      games: []
    }

    mockingoose(User).toReturn(user, 'findOneAndRemove')

    return request(app)
      .delete(`/users/${id}`)
      .expect(200)
      .then(response => {
        expect(response)
        expect(response.body)
        expect(response.body.id).toEqual(id)
        expect(response.body.username).toEqual(username)
        expect(response.body.games).toEqual([])
      })
  })

  it('POST /users/:userId/games', async () => {
    const game = generateGameMock('507f191e810c19729de860bb', 'Game 1', 5)
    const user = {
      id: '507f191e810c19729de860ea',
      username: 'bla',
      games: []
    }

    mockingoose(User).toReturn(user, 'find')
    mockingoose(Game).toReturn(game, 'create')
    mockingoose(User).toReturn(user, 'update')

    return request(app)
      .post(`/users/${user.id}/games`)
      .send(game)
      .expect(200)
      .then(response => {
        expect(response.body)
        expect(response.body.id).toEqual(game.id)
        expect(response.body.name).toEqual(game.name)

        mockingoose.resetAll()
      })
  })

  it('GET /users/:userId/games/:gameId', async () => {
    const game = generateGameMock('507f191e810c19729de860bb', 'Game 1', 2)
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
        expect(response.body.id).toEqual(game.id)
        expect(response.body.name).toEqual(game.name)

        mockingoose.resetAll()
      })
  })

  it('DELETE /users/:userId/games/:gameId', async () => {
    const game = generateGameMock('507f191e810c19729de860bb', 'Game 1', 2)
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
      .expect(200) // @TODO: every delete should response 204
      .then(response => {
        expect(response)
        // expect( (response) => {
        //   if (!response.body.result) throw new Error('Should be undefined')
        // })

        mockingoose.resetAll()
      })
  })
})
