import { User } from '../models/user.model'

export const getHeader = async (req, res, next) => {
  try {
  const header = req.headers['authorization'] || ''
  if(!header){
    return next('Unauthorized request')
  }
  console.log(header)
  const user = await User.findById(header)
  req.user = user
  return next()
  } catch (e) {
    return next( e.message || e.toString() )
  }
}