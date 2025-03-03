import express from 'express'
import { registerController } from '../controllers/authController'

//route object
const router = express.Router()

//routes
router.post('/register',registerController);

export default router;