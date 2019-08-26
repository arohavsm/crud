import express from 'express'
import cors from 'cors'

import { connect } from './db/index'
import { authRestRouter } from './auth/index'
import { restRouter } from './api/restRouter'
import { globalMiddleware } from './utils/globalMiddleware'
import { getHeader } from './auth/auth.middleware'

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
    'Origin, X-Requested-With, x-requested-with, x-requested-by ,Content-Type, Authorization, Accept, Access-Control-Al, low-methods, X-Custom-Header'
  )
  res.header('X-Frame-Options', 'deny')
  res.header('C-Content-Type-Optoins', 'nosniff')

  next()

})

app.get('/', getHeader, (req, res) => {
  res.send({
    message: "OK"
  })
})

app.post('/', getHeader, (req, res) => {
  res.send(req.body)
})

app.use('/auth', authRestRouter)
app.use('/api', restRouter)

// app.use(cors({credentials: true, origin: true})

app.listen(8090, function(){
  console.log('server is running on port 8090')
})