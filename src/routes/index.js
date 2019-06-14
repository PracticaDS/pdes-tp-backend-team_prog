import { Router } from 'express'
import UserRouter from './UserRouter'
import GameRouter from './GameRouter'

const userRouter = new UserRouter(Router())
const gameRouter = new GameRouter(Router({mergeParams: true}))

const initRoutes = (app) => {
  app.use('/users', userRouter.getRoutes())
  app.use('/users/:userId/games', gameRouter.getRoutes())

  app.get('/', (req, res) => {
    res.status(200).send('hello')
  })
}

export default initRoutes
