import { User } from '../models/user.model'

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(500).send({message: 'Invalid credentails'})
    }
    const user = await User.findOne({email, password}, {password: 0})

    if (!user) {
      return res.status(500).send({ message: 'Could not find the user' })
    }
    const { firstname, lastname, _id} = user
    return res.send({
      firstname,lastname,
      _id, email,
      user: _id,
      isLoggedIn: true
    })
  } catch (e) {
    res.status(500).send({ message: 'Invalid credentails' })
  }
}

export const signup = async (req, res) => {
  try{
    const { firstname, lastname, email, password } = req.body
    const missing = []
    if (!firstname) missing.push('Firstname')
    if (!lastname) missing.push('Lastname')
    if (!email) missing.push('Email')
    if (!password) missing.push('Password')

    if(missing.length > 0) {
      if(missing.length === 1){
        return res.status(500).send({message: missing.join('') + ' is missing'})
      }
      return res.status(500).send({ message: missing.join(' & ') + ' are missing' })
    }

    const user = await User.findOne({ email})
    if(user){
      return res.status(500).send({ message: `Email ${email} is already registered` })
    }

    const result = await User.create({
      firstname,lastname,email,password
    })

    if(!result){
      return res.status(500).send({ message: 'Could not create user. Please try again' })
    }
    return res.send({ message: `${email} has been registered. Please login`})
  } catch (e) {
    console.log(e)
    res.status(500).send({
      message: "Could not create user"
    })
  }
}