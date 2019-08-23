import mongoose, { Schema } from 'mongoose'

const userSchema = Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String
})

export const User = mongoose.model('User', userSchema)