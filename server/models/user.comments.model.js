import mongoose, { Schema } from 'mongoose'

const userCommentSchema = Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  title: String,
  body: String
})

export const Comment = mongoose.model('Comment', userCommentSchema)