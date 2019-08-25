import express from 'express'
import { commentsRouter } from './comments/comments.restRouter'
import { getHeader } from '../auth/auth.middleware'

export const restRouter = express.Router()

restRouter.use('/comments',getHeader, commentsRouter)