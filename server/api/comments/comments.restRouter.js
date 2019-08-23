import express from 'express'
import { 
  getAll, getCommentById, add, update, remove
 } from './comments.controller'

export const commentsRouter = express.Router()

commentsRouter.route('/')
  .get(getHeader, getAll)
  .post(add)

commentsRouter.route('/:id')
 .get(getCommentById)
 .put(update)
 .delete(remove)

 function getHeader(req, res, next) {
   const header = req.headers['authorization'] || ''
   if(!header){
     return next('Please send user id')
   }
   console.log(header)
   req.user = header
   next()
 }