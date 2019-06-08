import { Router } from 'express'
import { createGame, getGame, deleteGame } from '../controllers/games/games'

const router = Router({mergeParams: true})

router.post('/', createGame)
router.get('/:gameId', getGame)
// router.put('/:gameId', updateGame)
router.delete('/:gameId', deleteGame)

export default router