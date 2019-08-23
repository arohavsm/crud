import express from 'express'
import { signin, signup } from './auth.controller';

export const authRestRouter = express.Router()

authRestRouter.post('/signin', signin)
authRestRouter.post('/signup', signup)