import { Router } from 'express'
import UserRouter from './UserRouter'
import GameRouter from './GameRouter'
import TestRouter from './TestRouter'
import CustomLogger from "../utils/CustomLogger"
import Logger from '../utils/Logger'

const TEST_ENABLED = process.env.TEST_ENABLED || true
const logger = TEST_ENABLED ? new CustomLogger() : new Logger()
const userRouter = new UserRouter(Router(), logger)
const gameRouter = new GameRouter(Router({mergeParams: true}), logger)

const initRoutes = (app) => {
  app.use('/users', userRouter.router())
  app.use('/users/:userId/games', gameRouter.router())

  if (TEST_ENABLED) {
    const testRouter = new TestRouter(Router(), logger)
    app.use('/test', testRouter.router())
  }

  app.get('/', (req, res) => {
    res.status(200).send('hello')
  })
}

export default initRoutes
