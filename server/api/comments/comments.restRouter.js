import express from 'express'
import { 
  getAll, getCommentById, add, update, remove
 } from './comments.controller'

export const commentsRouter = express.Router()

commentsRouter.route('/')
  .get(getAll)
  .post(add)

commentsRouter.route('/:id')
 .get(getCommentById)
 .put(update)
 .delete(remove)