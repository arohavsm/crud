import express from 'express'
import { commentsRouter } from './comments/comments.restRouter'

export const restRouter = express.Router()

restRouter.use('/comments', commentsRouter)
