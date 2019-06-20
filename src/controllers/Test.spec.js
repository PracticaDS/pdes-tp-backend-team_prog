
import mockingoose from 'mockingoose'
import express, { Router } from 'express'
import bodyParser from 'body-parser'
import request from 'supertest'
import { generateGameMock } from '../utils/gridGenerator'
import User from '../schema/user/user'
import Game from '../schema/game/game'
import CustomLogger from '../utils/CustomLogger'
import TestRouter from '../routes/TestRouter'

describe('Routes for Test', () => {
  const app = express()
  const testRouter = new TestRouter(Router(), new CustomLogger())

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/test', testRouter.router())

  it('POST /db-clean/', async () => {
    return request(app)
      .post('/test/db-clean')
      .send()
      .expect(200)
      .then(response => {
        expect(response)
        expect(response.body)
        expect(response.body).toEqual({ result: "OK" })

        mockingoose.resetAll()
      })
  })
  it('POST /db-seed/', async () => {
    return request(app)
      .post('/test/db-seed')
      .send()
      .expect(200)
      .then(response => {
        expect(response)
        expect(response.body)
        expect(response.body).toEqual({ result: "OK" })

        mockingoose.resetAll()
      })
  })
})
