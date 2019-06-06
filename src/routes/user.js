import { Router } from 'express'
import { createUser, getUser, updateUser, deleteUser } from '../controllers/userController'

const router = Router()

router.post('/', createUser)
router.put('/', updateUser)
router.get('/:userId', getUser)
router.delete('/:userId', deleteUser)

export default router