import express from 'express'

import { connect } from './db/index'
import { authRestRouter } from './auth/index'
import { restRouter } from './api/restRouter'
import { globalMiddleware } from './utils/globalMiddleware'

connect()

const app = express()

globalMiddleware(app)

app.use( (err, req, res, enxt) => {
  res.send({message: (err.toString() || err.toString()) })
})

app.use((req,res,next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Authorization, Accept, Access-Control-Al, low-methods'
  )
  res.header('X-Frame-Options', 'deny')
  res.header('C-Content-Type-Optoins', 'nosniff')

  next()
})

app.use('/auth', authRestRouter)
app.use('/api', restRouter)

app.listen(8090, function(){
  console.log('server is running on port 8090')
})