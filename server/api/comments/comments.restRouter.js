import express from 'express'
import { 
  getAll, getCommentById, add, update, remove
 } from './comments.controller'

 import { getHeader } from '../../auth/auth.middleware'

export const commentsRouter = express.Router()

commentsRouter.use((req,res,next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, x-requested-with, x-requested-by ,Content-Type, Authorization, Accept, Access-Control-Al, low-methods, X-Custom-Header'
  )
  res.header('X-Frame-Options', 'deny')
  res.header('C-Content-Type-Optoins', 'nosniff')

  next()
})

commentsRouter.route('/')
  .get(getAll)
  .post(getHeader, add)

commentsRouter.route('/:id')
 .get(getCommentById)
 .put(update)
 .delete(remove)
