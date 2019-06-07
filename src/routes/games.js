import { Router } from 'express'
import { createGame } from '../controllers/games/games'

const router = Router()

router.post('/', createGame)

export default router