import { Router } from 'express'
import { createUser, getUser, updateUser, deleteUser, login } from '../controllers/userController'

const router = Router()

router.post('/', createUser)
router.put('/', updateUser)
router.get('/:userId', getUser)
router.delete('/:userId', deleteUser)
router.post('/login', login)

export default router