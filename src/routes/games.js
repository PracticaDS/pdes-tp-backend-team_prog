import { Router } from 'express'
import { createGame, getGame } from '../controllers/games/games'

const router = Router({mergeParams: true})

router.get('/:gameId', getGame)
router.post('/', createGame)
// router.put('/:gameId', updateGame)
// router.delete('/:gameId', deleteGame)

export default router